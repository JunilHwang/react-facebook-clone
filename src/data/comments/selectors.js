export const getComments = (state) => state.comments.data;

export const getCommentsCount = (postId) => (state) => {
  const comments = state.comments.data[postId];
  return comments ? comments.length : 0;
};

export const getStatusOf = (postId) => (state) => {
  return state.comments.status[postId];
}
