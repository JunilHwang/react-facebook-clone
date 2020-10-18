import { SET_COMMENT, SET_COMMENTS, SET_COMMENTS_OF_POST } from '@/data/comments/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_COMMENT: {
      const { postId, comment } = payload;
      return {
        ...state,
        [postId]: {
          ...state[postId],
          [comment.seq]: { ...comment },
        },
      };
    }
    case SET_COMMENTS: {
      return payload.reduce((obj, { postId, ...comment }) => {
        obj[postId] = obj[postId] || {};
        obj[postId] = {
          ...obj[postId],
          [comment.seq]: comment,
        };
        return obj;
      }, {});
    }
    case SET_COMMENTS_OF_POST: {
      const { postId, comments } = payload;
      return {
        ...state,
        [postId]: comments.reduce((commentsById, comment) => {
          commentsById[comment.seq] = comment;
          return commentsById;
        }, {}),
      };
    }
    default:
      return state;
  }
};
