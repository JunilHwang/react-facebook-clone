import { RequestStatus } from '@/constants';
import { combineReducers } from 'redux';
import { POST_REQUEST_FAIL, POST_REQUEST_LOADING, POST_REQUEST_SUCCESS, SET_POSTS } from './actionTypes';

const INITIAL_STATE = [];

function data(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
}

function status(state = RequestStatus.SUCCESS, action = {}) {
  switch (action.type) {
    case POST_REQUEST_LOADING:
      return RequestStatus.LOADING;
    case POST_REQUEST_SUCCESS:
      return RequestStatus.SUCCESS;
    case POST_REQUEST_FAIL:
      return RequestStatus.FAIL;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  status,
});
