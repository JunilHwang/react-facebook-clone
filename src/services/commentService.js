import { socialAdapter } from '@/adatpers';

export default Object.freeze({
  fetchComments(userId, postId) {
    return socialAdapter.get(`/user/${userId}/post/${postId}/comment/list`);
  },

  addComment(userId, postId, contents) {
    return socialAdapter.post(`/user/${userId}/post/${postId}/comment`, { contents });
  },
});
