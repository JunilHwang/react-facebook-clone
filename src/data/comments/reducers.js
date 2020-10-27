import * as ActionTypes from '@/data/rootActionTypes';

export default function comments(state = {}, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS: {
      return {
        ...state,
        [action.postId]: action.comments,
      };
    }
    default:
      return state;
  }
}
