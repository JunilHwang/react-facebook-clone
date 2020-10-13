import { createSelector } from 'reselect';

export const commentsOfPost = (post) =>
  createSelector(
    (state) => state.comments,
    ({ entries, ids }) =>
      ids.reduce((comments, seq) => {
        const comment = entries[seq];
        if (comment.postSeq === post.comments) comments.push(comment);
        return comments;
      }, [])
  );
