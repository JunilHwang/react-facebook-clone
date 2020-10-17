import { session } from '@/storages';
import { socialAdapter } from '@/adatpers';

const KEY = 'auth';

export default Object.freeze({

  // 로그인에 대한 API가 현재 없는 상태라서 로그인을 시도했을 때 /api/user/me를 받아오도록 임시로 처리
  async signIn(userInfo) {
    const user = await socialAdapter.get('/user/me');
    session.set(KEY, user);
    return user;
  },

  async validateExists(address) {
    if (await socialAdapter.post('/user/', { address })) {
      throw new Error('이미 가입된 회원의 이메일 주소입니다.');
    }
  },

  fetchFreidns() {
    return socialAdapter.get('/user/connections');
  },

  signUp(userInfo) {
    return socialAdapter.post('/user/join', userInfo);
  },

  getAuth() {
    return session.get(KEY) || null;
  },

  removeAuth() {
    session.remove(KEY);
  },

});
