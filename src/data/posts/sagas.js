import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import apis from '@/services/apis';
import * as selectors from '@/data/rootSelectors';
import { setPosts, getPosts, setStatusAddPost, setStatusLoadPost, setStatusScrollPost } from '@/data/posts/actions';
import {
  ADD_POST,
  GET_POSTS,
  GET_NEXT_POSTS,
  GET_POSTS_OF_USER,
  LIKE_POST,
  GET_NEXT_POSTS_OF_USER,
} from '@/data/posts/actionTypes';
import * as actions from '@/data/rootActions';
import { StatusTypes } from '@/services';

export default function* posts() {
  yield all([
    takeLatest(ADD_POST, addPost$),
    takeLatest(GET_POSTS, getPosts$),
    takeLatest(GET_NEXT_POSTS, getPosts$),
    takeLatest(GET_POSTS_OF_USER, getPostsOfUser$),
    takeLatest(GET_NEXT_POSTS_OF_USER, getPostsOfUser$),
    takeLatest(LIKE_POST, likePost$),
  ]);
}

function* addPost$(action) {
  try {
    const { contents, resetForm } = action.payload;
    yield put(setStatusAddPost(StatusTypes.Loading));
    yield call(apis.postsApi.createPost, contents);
    yield put(setStatusAddPost(StatusTypes.Loaded));
    yield put(getPosts());
    resetForm();
  } catch (e) {
    yield put(setStatusAddPost(StatusTypes.Loaded));
  }
}

function* getPosts$(action) {
  const { type, payload = {} } = action;
  const { offset = null, limit = null } = payload;
  const setStatus = type === GET_POSTS ? setStatusLoadPost : setStatusScrollPost;
  try {
    const user = yield select(selectors.users.getUser);
    if (user === null) {
      yield put(actions.router.push('/login'));
      return;
    }
    yield put(setStatus(StatusTypes.Loading));
    const friends = yield call(apis.usersApi.getFriendsOfMine);
    const connections = [...friends, user].map(({ name, email, profileImageUrl, seq }) => ({
      name,
      email,
      profileImageUrl,
      userId: seq,
    }));
    const postsOfConnections = yield all(
      connections.map(({ userId }) => call(apis.postsApi.getAllPosts, { userId, offset, limit }))
    );
    const nowAllPosts = yield select(selectors.posts.getPosts);
    const allPosts = postsOfConnections
      .map((posts, key) =>
        posts.map((post) => ({
          ...post,
          writer: { ...connections[key] },
        }))
      )
      .flatMap((v) => v);
    yield put(setPosts(type === GET_POSTS ? allPosts : [...nowAllPosts, ...allPosts]));
    yield put(setStatus(StatusTypes.Loaded));
  } catch (e) {
    yield put(setStatus(StatusTypes.Error(e.message)));
  }
}

function* getPostsOfUser$(action) {
  const { type, payload = {} } = action;
  const { userId, limit = null, offset = null } = payload;
  const setStatus = type === GET_POSTS_OF_USER ? setStatusLoadPost : setStatusScrollPost;
  try {
    if (userId === null) {
      yield put(actions.router.goBack());
      return;
    }
    yield put(setStatus(StatusTypes.Loading));
    const me = yield select(selectors.users.getUser);
    const friends = yield call(apis.usersApi.getFriendsOfMine);
    const postsOfUser = yield call(apis.postsApi.getAllPosts, { userId, offset, limit });
    const { email = {}, name = null, profileImageUrl = null } = [...friends, me].find((v) => v.seq === userId) || {};
    const allPosts = postsOfUser.map((post) => ({
      ...post,
      writer: { userId, email, name, profileImageUrl },
    }));
    yield put(setPosts(allPosts));
    yield put(setStatus(StatusTypes.Loaded));
  } catch (e) {
    yield put(setStatus(StatusTypes.Error(e.message)));
  }
}

function* likePost$(action) {
  try {
    const user = yield select(selectors.users.getUser);
    const { payload: postId } = action;
    const userId = user.seq;
    yield call(apis.postsApi.likePost, { userId, postId });
    yield put(getPosts());
  } catch (e) {
    yield put(setStatusLoadPost(StatusTypes.Error(e.message)));
  }
}
