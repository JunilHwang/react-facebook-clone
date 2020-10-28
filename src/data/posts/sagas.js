import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import apis from '@/services/apis';
import * as selectors from '@/data/rootSelectors';
import { setPosts, getPosts, postRequestFail, postRequestLoading, postRequestSuccess } from '@/data/posts/actions';
import { ADD_POST, GET_POSTS, LIKE_POST } from '@/data/posts/actionTypes';
import * as actions from '@/data/rootActions';

export default function* posts() {
  yield all([takeLatest(ADD_POST, addPost$), takeLatest(GET_POSTS, getPosts$), takeLatest(LIKE_POST, likePost$)]);
}

function* addPost$(action) {
  try {
    const { contents, resetForm } = action.payload;
    put(postRequestLoading(ADD_POST));
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
    yield put(postRequestLoading(GET_POSTS));
    const user = yield select(selectors.users.getUser);
    if (user === null) {
      yield put(actions.router.push('/login'));
    }
    const friends = yield call(apis.usersApi.getFriendsOfMine);
    const connections = [...friends, user];
    const postsOfConnections = yield all(
      connections.map(({ seq: userId }) => call(apis.postsApi.getAllPosts, { userId }))
    );
    const posts = [].concat.apply([], postsOfConnections);
    yield put(setPosts(posts));
    yield put(postRequestSuccess());
  } catch (e) {
    yield put(postRequestFail(e.message));
  }
}

function* likePost$(action) {
  try {
    yield put(postRequestLoading(LIKE_POST));
    const user = select(selectors.users.getUser);
    const { postId } = action.payload;
    const userId = user.seq;
    yield apis.postsApi.likePost({ userId, postId });
    yield put(getPosts());
  } catch (error) {
    yield put(postRequestFail(e.message));
  }
}
