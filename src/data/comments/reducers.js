import { SET_COMMENT, SET_COMMENTS } from '@/data/comments/actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_COMMENT:
      return {
        ...state,
        [payload.postId]: {
          ...state[payload.postId],
          [payload.seq]: { ...payload },
        },
      };
    case SET_COMMENTS:
      return payload.reduce((obj, comment) => {
        obj[comment.postId] = obj[comment.postId] || {};
        obj[comment.postId] = {
          ...obj[comment.postId],
          [comment.seq]: comment,
        };
        return obj;
      }, {});
    default:
      return state;
  }
};
