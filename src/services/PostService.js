import { PostRepository } from '../repositories';

export default Object.freeze({
  fetchPosts() {
    return PostRepository.findAll().sort((a, b) => b.createAt - a.createAt);
  },

  fetchPost(seq) {
    return PostRepository.findBySeq(seq);
  },

  savePost(post) {
    PostRepository.save(post);
  },

  addComment(post, comment) {
    const allCommentList = this.fetchPost().flatMap(({ commentList }) => commentList);
    this.savePost({
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
});
