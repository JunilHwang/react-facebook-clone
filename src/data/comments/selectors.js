import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (postId) => createSelector(selectAllComments, (comments) => comments[postId]);
