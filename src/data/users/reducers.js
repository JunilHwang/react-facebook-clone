import { LOGOUT, SET_USER, USER_REQUEST_FAIL, USER_REQUEST_LOADING, USER_REQUEST_SUCCESS } from './actionTypes';
import { combineReducers } from 'redux';
import {RequestStatus} from "@/constants";

const initialState = {
  user: {
    seq: 1,
    name: 'junil',
    email: { address: 'tester00@gmail.com' },
    loginCount: 47,
    lastLoginAt: '2019-12-08T15:23:06.898',
    createAt: '2019-12-08T13:50:11.776',
  },
};

function auth(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

function status(state = {}, action = {}) {
  switch (action.type) {
    case USER_REQUEST_LOADING:
      return RequestStatus.LOADING;
    case USER_REQUEST_SUCCESS:
      return RequestStatus.SUCCESS;
    case USER_REQUEST_FAIL:
      return RequestStatus.FAIL;
    default:
      return state;
  }
}

export default combineReducers({
  auth,
  status,
});
