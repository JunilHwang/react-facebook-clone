import { socialApiClient } from '@/services/apis/clients';

export default {
  async login({ principal, credentials }) {
    try {
      return await socialApiClient.post('/auth', { principal, credentials });
    } catch (e) {
      throw Error(e.message);
    }
  },
};
