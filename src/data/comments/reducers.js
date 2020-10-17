import { SET_COMMENT, SET_COMMENTS } from '@/data/comments/actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_COMMENT:
      return {
        ...state,
        [payload.postSeq]: {
          ...state[payload.postSeq],
          [payload.seq]: { ...payload },
        },
      };
    case SET_COMMENTS:
      return payload.reduce((obj, comment) => {
        obj[comment.postSeq] = obj[comment.postSeq] || {};
        obj[comment.postSeq] = {
          ...obj[comment.postSeq],
          [comment.seq]: comment,
        };
        return obj;
      }, {});
    default:
      return state;
  }
};
