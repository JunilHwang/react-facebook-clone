import { all, takeLatest, call, put } from 'redux-saga/effects';
import { ADD_USER, AUTH_USER } from '@/data/users/actionTypes';
import { apis } from '@/services';
import { setUser, userRequestFail, userRequestLoading, userRequestSuccess } from './actions';
import * as actions from '@/data/rootActions';

export default function* users() {
  yield all([takeLatest(ADD_USER, addUser$), takeLatest(AUTH_USER, authUser$)]);
}

function* addUser$(action) {
  try {
    const { payload } = action;
    yield put(userRequestLoading(ADD_USER));
    yield call(apis.usersApi.register, payload);
    yield put(userRequestSuccess());
    yield put(actions.router.push('/login'));
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}

function* authUser$(action) {
  try {
    const { payload } = action;
    yield put(userRequestLoading(AUTH_USER));
    const authInfo = yield call(apis.authApi.login, payload);
    yield put(userRequestSuccess());
    yield put(setUser(authInfo));
    yield put(actions.router.push('/'));
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}
