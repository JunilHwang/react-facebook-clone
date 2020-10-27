export const getPosts = (state) => state.posts;
export const getPost = (postSeq) => (state) => state.posts.find((v) => v.seq == postSeq);
