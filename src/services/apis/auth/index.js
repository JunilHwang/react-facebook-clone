import { socialApiClient } from '@/services/apis/clients';

export default {
  async login({ email: principal, password: credentials }) {
    try {
      return await socialApiClient.post('/auth', { principal, credentials });
    } catch (e) {
      throw Error(e.message);
    }
  },
};
