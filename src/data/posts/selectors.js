import { createSelector } from 'reselect';

export const selectAllPosts = ({ posts }) => posts;

export const selectAllPostsOrderByCreateAt = createSelector(selectAllPosts, ({ bySeq, ids }) =>
  ids.map((seq) => bySeq[seq]).sort((a, b) => b.createAt - a.createAt)
);
