import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (postSeq) => createSelector(selectAllComments, (comments) => comments[postSeq]);
