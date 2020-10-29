import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import apis from '@/services/apis';
import * as selectors from '@/data/rootSelectors';
import { setPosts, getPosts, postRequestFail, postRequestLoading, postRequestSuccess } from '@/data/posts/actions';
import { ADD_POST, GET_POSTS, GET_POSTS_OF_USER, LIKE_POST } from '@/data/posts/actionTypes';
import * as actions from '@/data/rootActions';

export default function* posts() {
  yield all([
    takeLatest(ADD_POST, addPost$),
    takeLatest(GET_POSTS, getPosts$),
    takeLatest(GET_POSTS_OF_USER, getPostsOfUser$),
    takeLatest(LIKE_POST, likePost$),
  ]);
}

function* addPost$(action) {
  try {
    const { contents, resetForm } = action.payload;
    put(postRequestLoading());
    yield call(apis.postsApi.createPost, contents);
    yield put(getPosts());
    resetForm();
    yield put(postRequestSuccess());
  } catch (e) {
    yield put(postRequestFail(e.message));
  }
}

function* getPosts$() {
  try {
    yield put(postRequestLoading());
    const user = yield select(selectors.users.getUser);
    if (user === null) {
      yield put(actions.router.push('/login'));
      return;
    }
    const friends = yield call(apis.usersApi.getFriendsOfMine);
    const connections = [...friends, user].map(({ name, email, profileImageUrl, seq }) => ({
      name,
      email,
      profileImageUrl,
      userId: seq,
    }));
    const postsOfConnections = yield all(connections.map(({ userId }) => call(apis.postsApi.getAllPosts, { userId })));
    const allPosts = postsOfConnections
      .map((posts, key) =>
        posts.map((post) => ({
          ...post,
          writer: { ...connections[key] },
        }))
      )
      .flatMap((v) => v);
    yield put(setPosts(allPosts));
    yield put(postRequestSuccess());
  } catch (e) {
    yield put(postRequestFail(e.message));
  }
}

function* getPostsOfUser$(actions) {
  try {
    const { payload: userId } = actions;
    if (userId === null) {
      yield put(actions.router.goBack());
      return;
    }
    yield put(postRequestLoading());
    const me = yield select(selectors.users.getUser);
    const friends = yield call(apis.usersApi.getFriendsOfMine);
    const postsOfUser = yield call(apis.postsApi.getAllPosts, { userId });
    const { email = {}, name = null, profileImageUrl = null } = [...friends, me].find((v) => v.seq === userId) || {};
    const allPosts = postsOfUser.map((post) => ({
      ...post,
      writer: { userId, email, name, profileImageUrl },
    }));
    yield put(setPosts(allPosts));
    yield put(postRequestSuccess());
  } catch (e) {
    yield put(postRequestFail(e.message));
  }
}

function* likePost$(action) {
  try {
    yield put(postRequestLoading());
    const user = yield select(selectors.users.getUser);
    const { payload: postId } = action;
    const userId = user.seq;
    yield call(apis.postsApi.likePost, { userId, postId });
    yield put(getPosts());
  } catch (error) {
    yield put(postRequestFail(e.message));
  }
}
