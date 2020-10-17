import { createSelector } from 'reselect';

export const selectAllComments = (state) => state.comments;
export const selectCommentsOfPost = (postSeq) =>
  createSelector(selectAllComments, ({ entries, ids }) =>
    ids.reduce((comments, seq) => {
      const comment = entries[seq];
      if (comment.postSeq === postSeq) comments.push(comment);
      return comments;
    }, [])
  );
