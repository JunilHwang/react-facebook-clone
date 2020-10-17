import { commentRepository } from '@/repositories';

export default Object.freeze({
  fetchComments() {
    return commentRepository.findAll();
  },

  addComment(comment) {
    commentRepository.add({
      ...comment,
      createAt: Date.now(),
    });
  },
});
