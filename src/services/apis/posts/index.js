import { socialApiClient } from '@/services/apis/clients';

export default {
  async createPost(contents) {
    try {
      return await socialApiClient.post('/post', { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async createComment({ userId, postId, contents }) {
    try {
      return await socialApiClient.post(`/user/${userId}/post/${postId}/comment`, { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getCommentList({ userId, postId }) {
    try {
      return await socialApiClient.get(`/user/${userId}/post/${postId}/comment/list`);
    } catch (e) {
      throw Error(e.message);
    }
  },

  async likePost({ userId, postId }) {
    try {
      return await socialApiClient.patch(`/user/${userId}/post/${postId}/like`);
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getAllPosts({ userId, offset }) {
    try {
      return await socialApiClient.get(`/user/${userId}/post/list?offset=${offset}`);
    } catch (e) {
      throw Error(e.message);
    }
  },
};
