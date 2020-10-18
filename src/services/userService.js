import { session } from '@/storages';
import { socialAdapter } from '@/adatpers';
import {AuthErrorMessage} from "@/constants";

const KEY = 'auth';

export default Object.freeze({
  validateExists(address) {
    return socialAdapter.post('/user/exists', { address });
  },

  fetchFriends() {
    return socialAdapter.get('/user/connections');
  },

  signUp(formData) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    return socialAdapter.post('/user/join', formData, config);
  },

  async setAuth({ email, password }) {
    try {
      const user = await socialAdapter.post('/auth', {
        principal: email,
        credentials: password,
      });
      session.set(KEY, user);
    } catch (e) {
      throw new Error(AuthErrorMessage.NONE_MATCH_USER_INFO);
    }
  },

  getAuth() {
    return Promise.resolve(session.get(KEY) || null);
  },

  removeAuth() {
    session.remove(KEY);
    return Promise.resolve();
  },
});
