import { UserRepository } from '../repositories';
import { session } from '../storages';

const KEY = 'auth';

export default Object.freeze({
  signIn(userInfo) {
    const { password, ...user } = UserRepository.findByEmailAndPassword(userInfo) || {};
    if (!user) return false;
    session.set(KEY, user);
    return user;
  },

  signUp(userInfo) {
    const user = UserRepository.findByEmail(userInfo.email);
    if (user) throw new Error('이미 회원가입이 되어있는 사용자 정보입니다.');

    UserRepository.save(userInfo);
  },

  getAuth() {
    return session.get(KEY) || null;
  },

  removeAuth() {
    session.remove(KEY);
  },
});
