import { all, call, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { apis, StatusTypes } from '@/services';
import { ADD_COMMENT, GET_COMMENTS } from './actionTypes';
import { setComments, getComments, setCommentStatus } from './actions';

export default function* comments() {
  yield all([takeEvery(GET_COMMENTS, getComments$), takeLatest(ADD_COMMENT, addComment$)]);
}

function* getComments$(action) {
  const { userId, postId } = action.payload;
  try {
    yield put(setCommentStatus({ postId, status: StatusTypes.Loading }));
    const comments = yield call(apis.postsApi.getCommentList, { userId, postId });
    yield put(setComments({ postId, comments }));
    yield put(setCommentStatus({ postId, status: StatusTypes.Loaded }));
  } catch (e) {
    yield put(setCommentStatus({ postId, status: StatusTypes.Error(e.message) }));
  }
}

function* addComment$(action) {
  const { userId, postId, contents, resetForm } = action.payload;
  try {
    yield put(setCommentStatus({ postId, status: StatusTypes.Loading }));
    yield call(apis.postsApi.createComment, { userId, postId, contents });
    yield put(getComments({ userId, postId }));
    resetForm();
  } catch (e) {
    yield put(setCommentStatus({ postId, status: StatusTypes.Error(e.message) }));
  }
}
