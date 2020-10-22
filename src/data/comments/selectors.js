export const getComments = (state) => state.comments;

export const getCommentsCount = (postId) => (state) => {
  const comments = state.comments[postId];
  return comments ? comments.length : 0;
};
