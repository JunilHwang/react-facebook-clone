import { all, call, takeLatest, put } from 'redux-saga/effects';
import { apis } from '@/services';
import { ADD_COMMENT, GET_COMMENTS } from './actionTypes';
import { setComments, commentRequestFail, commentRequestLoading, commentRequestSuccess, getComments } from './actions';

export default function* comments() {
  yield all([takeLatest(GET_COMMENTS, getComments$), takeLatest(ADD_COMMENT, addComment$)]);
}

function* getComments$(action) {
  try {
    yield put(commentRequestLoading(GET_COMMENTS));
    const { userId, postId } = action.payload;
    const comments = yield call(apis.postsApi.getCommentList, { userId, postId });
    yield put(setComments({ postId, comments }));
    yield put(commentRequestSuccess());
  } catch (e) {
    yield put(commentRequestFail(e.message));
  }
}

function* addComment$(action) {
  try {
    yield put(commentRequestLoading(ADD_COMMENT));
    const { postWriterId, postId, contents, resetForm } = action.payload;
    yield call(apis.postsApi.createComment, { userId: postWriterId, postId, contents });
    yield put(getComments({ postWriterId, postId }));
    resetForm();
    yield put(commentRequestSuccess());
  } catch (e) {
    yield put(commentRequestFail(e.message));
  }
}
