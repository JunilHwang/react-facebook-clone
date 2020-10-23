import { socialApiClient } from '@/services/apis/clients';

export default {
  async getFriendsOfMine() {
    try {
      return await socialApiClient.get('/api/user/connections');
    } catch (e) {
      throw Error(e.message);
    }
  },

  async checkEmailExistence({ address }) {
    try {
      return await socialApiClient.post('/api/user/exists', { address });
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
