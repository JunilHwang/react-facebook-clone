import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (postId) =>
  createSelector(selectAllComments, (commentsByPost) => {
    const { byId, ids } = commentsByPost[postId] || { byId: {}, ids: [] };
    return ids.map((id) => byId[id]).sort((a, b) => b.createAt - a.createAt);
  });
