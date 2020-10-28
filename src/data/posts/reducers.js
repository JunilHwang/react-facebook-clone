import * as ActionTypes from '@/data/rootActionTypes';

const INITIAL_STATE = [];

function posts(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_POSTS:
      return action.payload;
    default:
      return state;
  }
}

export default posts;
