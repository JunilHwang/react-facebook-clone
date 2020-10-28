import { socialApiClient } from '@/services/apis/clients';

export default {
  async getFriendsOfMine() {
    try {
      return await socialApiClient.get('/user/connections');
    } catch (e) {
      console.log(e);
      throw Error(e.message);
    }
  },

  async checkEmailExistence({ address }) {
    try {
      return await socialApiClient.post('/user/exists', { address });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async register({ email, password, profileImage, name }) {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('profileImage', profileImage);
      formData.append('name', name);
      return await socialApiClient.post('/user/join', formData);
    } catch (e) {
      throw Error(e.message);
    }
  },

  async whoAmI() {
    try {
      return await socialApiClient.get('/user/me');
    } catch (e) {
      throw Error(e.message);
    }
  },
};
