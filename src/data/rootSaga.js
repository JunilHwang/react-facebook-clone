import { all, fork } from 'redux-saga/effects';

import * as posts from './posts/sagas';
import * as comments from './comments/sagas';
import * as users from './users/sagas';

export default function* rootSaga() {
  yield all([fork(posts), fork(comments), fork(users)]);
}
