import { socialApiClient } from '@/services/apis/clients';

export const api = {
  async getFriendsOfMine() {
    try {
      const res = await socialApiClient.get('/api/user/connections');
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async checkEmailExistence({ address }) {
    try {
      const res = await socialApiClient.post('/api/user/exists', { address });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async register({ email, password, profileImage, name }) {},

  async whoAmI() {
    try {
      return await socialApiClient.get('/api/user/me');
    } catch (e) {
      throw Error(e.message);
    }
  },
};
