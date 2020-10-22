import { socialApiClient } from '@/services/apis/clients';

export const api = {
  async createPost(contents) {
    try {
      await socialApiClient.post('/api/post', { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async createComment({ userId, postId, contents }) {
    try {
      return await socialApiClient.post(`/api/user/${userId}/post/${postId}/comment`, { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getCommentList({ userId, postId }) {
    try {
      const res = await socialApiClient.get(`/api/user/${userId}/post/${postId}/comment/list`);
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async likePost({ userId, postId }) {
    try {
      await socialApiClient.patch(`/api/user/${userId}/post/${postId}/like`);
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getAllPosts({ userId }) {
    try {
      const res = await socialApiClient.get(`/api/user/${userId}/post/list`);
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
