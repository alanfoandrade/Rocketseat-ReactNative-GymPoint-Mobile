import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import checkin from './checkin/sagas';
import helporder from './helporder/sagas';

export default function* rootSaga() {
  return yield all([auth, student, checkin, helporder]);
}
