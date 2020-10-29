import { combineReducers } from 'redux';
import { SET_POSTS, SET_STATUS_ADD_POST, SET_STATUS_LOAD_POST, SET_STATUS_SCROLL_POST } from './actionTypes';
import { StatusTypes } from '@/services';

const INITIAL_STATE = [];

function data(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
}

const initStateOfStatus = {
  add: StatusTypes.Loading,
  posts: StatusTypes.Loading,
  scroll: StatusTypes.Loading,
};

function status(state = initStateOfStatus, action = {}) {
  switch (action.type) {
    case SET_STATUS_ADD_POST:
      return {
        ...state,
        add: action.payload,
      };
    case SET_STATUS_LOAD_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_STATUS_SCROLL_POST:
      return {
        ...state,
        scroll: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  data,
  status,
});
