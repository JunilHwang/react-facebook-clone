import { SET_COMMENT, SET_COMMENTS, SET_COMMENTS_OF_POST } from '@/data/comments/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_COMMENT: {
      const { postId, comment } = payload;
      return {
        ...state,
        [postId]: {
          byId: {
            ...state[postId].byId,
            [comment.seq]: { ...comment },
          },
          ids: [...state[postId].ids, comment.seq],
        },
      };
    }
    case SET_COMMENTS: {
      const { postIds, commentsByPost } = payload;
      return postIds.reduce((obj, postId, key) => {
        obj[postId] = commentsByPost[key].reduce(
          ({ byId, ids }, comment) => {
            byId[comment.seq] = comment;
            ids.push(comment.seq);
            return { byId, ids };
          },
          { byId: {}, ids: [] }
        );
        return obj;
      }, {});
    }
    case SET_COMMENTS_OF_POST: {
      const { postId, comments } = payload;
      return {
        ...state,
        [postId]: comments.reduce(
          ({ byId, ids }, comment) => {
            byId[comment.seq] = comment;
            ids.push(comment.seq);
            return { byId, ids };
          },
          { byId: {}, ids: [] }
        ),
      };
    }
    default:
      return state;
  }
};
