import { combineReducers } from 'redux';

import auth from './auth/reducer';
import student from './student/reducer';
// import checkin from './checkin/reducer';
// import helporder from './helporder/reducer';

export default combineReducers({
  auth,
  student,
});
