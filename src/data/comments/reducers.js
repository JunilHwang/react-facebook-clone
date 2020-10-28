import { RequestStatus } from '@/constants';
import { combineReducers } from 'redux';
import { COMMENT_REQUEST_FAIL, COMMENT_REQUEST_LOADING, COMMENT_REQUEST_SUCCESS, SET_COMMENTS } from './actionTypes';

function data(state = {}, action = {}) {
  switch (action.type) {
    case SET_COMMENTS: {
      const { postId, comments } = action.payload;
      return {
        ...state,
        [postId]: comments,
      };
    }
    default:
      return state;
  }
}

function status(state = {}, action = {}) {
  switch (action.type) {
    case COMMENT_REQUEST_LOADING:
      return RequestStatus.LOADING;
    case COMMENT_REQUEST_SUCCESS:
      return RequestStatus.SUCCESS;
    case COMMENT_REQUEST_FAIL:
      return RequestStatus.FAIL;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  status,
});
