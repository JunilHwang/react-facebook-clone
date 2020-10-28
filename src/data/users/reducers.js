import { LOGOUT, SET_USER, USER_REQUEST_FAIL, USER_REQUEST_LOADING, USER_REQUEST_SUCCESS } from './actionTypes';
import { combineReducers } from 'redux';
import { RequestStatus } from '@/constants';

const initialState = {
  user: null,
};

function auth(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT:
      return initialState;
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
