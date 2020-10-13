import { createSelector } from 'reselect';

export const allPosts = createSelector(
  (state) => state.posts,
  ({ entries, ids }) => ids.map((seq) => entries[seq]).sort((a, b) => b.createAt - a.createAt)
);
