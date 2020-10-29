import { combineReducers } from 'redux';
import { SET_COMMENTS, SET_COMMENT_STATUS } from './actionTypes';

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
    case SET_COMMENT_STATUS:
      const { postId, status } = action.payload;
      return {
        ...state,
        [postId]: status,
      };
    default:
      return state;
  }
}

export default combineReducers({
  data,
  status,
});
