import { socialAdapter } from '@/adatpers';

export default Object.freeze({
  fetchPostsOfUser(userId) {
    return socialAdapter.get(`/user/${userId}/post/list`);
  },

  addPost(userId, contents) {
    return socialAdapter.post(`/post`, { contents });
  },

  toggleLike(userId, postId) {
    return socialAdapter.patch(`/user/${userId}/post/${postId}/like`);
  },
});
