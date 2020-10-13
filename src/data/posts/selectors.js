import { createSelector } from 'reselect';

export const selectAllPosts = (state) => state.posts;
export const selectAllPostsOrderByCreateAt = createSelector(selectAllPosts, ({ entries, ids }) =>
  ids.map((seq) => entries[seq]).sort((a, b) => b.createAt - a.createAt)
);
