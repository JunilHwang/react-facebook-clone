import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (post) =>
  createSelector(selectAllComments, ({ entries, ids }) =>
    ids.reduce((comments, seq) => {
      const comment = entries[seq];
      if (comment.postSeq === post.comments) comments.push(comment);
      return comments;
    }, [])
  );
