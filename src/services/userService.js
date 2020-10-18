import { session } from '@/storages';
import { socialAdapter } from '@/adatpers';

const KEY = 'auth';

export default Object.freeze({
  async validateExists(address) {
    if (await socialAdapter.post('/user/exists', { address })) {
      throw new Error('이미 가입된 회원의 이메일 주소입니다.');
    }
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
      throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
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
