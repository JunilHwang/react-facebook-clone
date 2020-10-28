import * as ActionTypes from '@/data/rootActionTypes';

export default function comments(state = {}, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_COMMENTS: {
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
