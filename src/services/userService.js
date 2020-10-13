import { userRepository } from '../repositories';
import { session } from '../storages';

const KEY = 'auth';

export default Object.freeze({
  signIn(userInfo) {
    const user = userRepository.findByEmailAndPassword(userInfo);
    if (user === undefined) return false;
    const { password, ...auth } = user;
    session.set(KEY, auth);
    return auth;
  },

  signUp(userInfo) {
    const user = userRepository.findByEmail(userInfo.email);
    if (user) throw new Error('이미 회원가입이 되어있는 사용자 정보입니다.');

    userRepository.upsert(userInfo);
  },

  getAuth() {
    return session.get(KEY) || null;
  },

  removeAuth() {
    session.remove(KEY);
  },
});
