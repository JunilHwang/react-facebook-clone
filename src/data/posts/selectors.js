export const getPosts = (state) => state.posts.data;
export const getPost = (postSeq) => (state) => state.posts.data.find((v) => v.seq === postSeq);
export const getStatus = (state) => state.posts.status;
