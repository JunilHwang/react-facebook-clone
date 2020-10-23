import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (postId) =>
  createSelector(selectAllComments, (commentsByPost) => {
    const { byId, ids } = commentsByPost[postId] || { byId: {}, ids: [] };
    return ids.sort((a, b) => a - b).map((id) => byId[id]);
  });
