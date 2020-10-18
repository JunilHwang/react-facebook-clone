import { SET_POST, SET_POSTS } from './actionTypes';
import { combineReducers } from 'redux';

const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_POST:
      return {
        ...state,
        [payload.seq]: { ...payload },
      };
    case SET_POSTS:
      return payload.reduce((obj, post) => {
        obj[post.seq] = post;
        return obj;
      }, {});
    default:
      return state;
  }
};

const ids = (state = [], { type, payload }) => {
  switch (type) {
    case SET_POST:
      return [...state, payload.seq];
    case SET_POSTS:
      return payload.map(({ seq }) => seq);
    default:
      return state;
  }
};

export default combineReducers({ byId, ids });
