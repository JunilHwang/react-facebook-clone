import { createSelector } from 'reselect';

export const selectAllPosts = ({ posts }) => posts;

export const selectAllPostsOrderByCreateAt = createSelector(selectAllPosts, ({ byId, ids }) =>
  ids.map((seq) => byId[seq]).sort((a, b) => b.createAt - a.createAt)
);
