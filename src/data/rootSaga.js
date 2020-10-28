import { all, fork } from 'redux-saga/effects';

import posts from './posts/sagas';
import comments from './comments/sagas';
import users from './users/sagas';

export default function* rootSaga() {
  yield all([fork(posts), fork(comments), fork(users)]);
}
