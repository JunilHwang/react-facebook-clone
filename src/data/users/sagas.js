import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SIGN_UP, AUTH_USER, LOGOUT, RELOAD_USER } from './actionTypes';
import { apis, authService } from '@/services';
import { setUser, reloadUser, authUser, userRequestFail, userRequestLoading, userRequestSuccess } from './actions';
import * as actions from '@/data/rootActions';

export default function* users() {
  yield all([
    takeLatest(RELOAD_USER, reloadUser$),
    takeLatest(SIGN_UP, signUp$),
    takeLatest(AUTH_USER, authUser$),
    takeLatest(LOGOUT, logout$),
  ]);
}

function* reloadUser$() {
  try {
    const auth = authService.get();
    yield put(setUser(auth));
    if (auth.user === null) {
      yield put(actions.router.push('/login'));
    }
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}

function* signUp$(action) {
  try {
    const { payload } = action;
    yield put(userRequestLoading());
    yield call(apis.usersApi.register, payload);
    yield put(userRequestSuccess());
    yield put(authUser(payload));
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}

function* authUser$(action) {
  try {
    const { payload } = action;
    yield put(userRequestLoading());
    const auth = yield call(apis.authApi.login, payload);
    authService.set(auth);
    yield put(userRequestSuccess());
    yield put(reloadUser());
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}

function* logout$() {
  try {
    authService.remove();
    yield put(reloadUser());
  } catch (e) {
    yield put(userRequestFail(e.message));
  }
}
