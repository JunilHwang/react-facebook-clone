import { socialApiClient } from '@/services/apis/clients';

export const api = {
  async login({ principal, credentials }) {
    try {
      const res = await socialApiClient.post('/api/auth', { principal, credentials });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
