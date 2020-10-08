import { PostRepository } from '../repositories';

export default Object.freeze({
  fetchPosts() {
    return PostRepository.findAll().sort((a, b) => b.createAt - a.createAt);
  },

  fetchPost(seq) {
    return PostRepository.findBySeq(seq);
  },

  addPost(post) {
    PostRepository.upsert({
      ...post,
      createAt: Date.now(),
      likes: 0,
      comments: 0,
      likesOfMe: false,
      commentList: [],
    });
  },

  updatePost(post) {
    PostRepository.upsert(post);
  },

  addComment(post, comment) {
    const allCommentList = PostRepository.findAll().flatMap(({ commentList }) => commentList);
    this.updatePost({
      ...post,
      comments: post.comments + 1,
      commentList: [
        ...post.commentList,
        {
          ...comment,
          seq: allCommentList.reduce((seq, comment) => Math.max(seq, comment.seq), 0) + 1,
          createAt: Date.now(),
        },
      ],
    });
  },

  toggleLike(post) {
    const likesOfMe = !post.likesOfMe;
    const likes = post.likes + (likesOfMe ? 1 : -1);
    this.updatePost({ ...post, likesOfMe, likes });
  },
});
