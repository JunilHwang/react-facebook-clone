export const getComments = (state) => state.comments;

export const getCommentsByPost = (postSeq) => (state) => state.comments[postSeq] || [];

export const getCommentsCount = (postId) => (state) => {
  const comments = state.comments[postId];
  return comments ? comments.length : 0;
};
