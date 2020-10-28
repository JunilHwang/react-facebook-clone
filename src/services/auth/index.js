import { session } from '@/storages';

const KEY = 'auth';

export default {
  get() {
    return session.get(KEY, {
      user: null,
      apiToken: null,
    });
  },

  set(auth) {
    session.set(KEY, auth);
  },

  remove() {
    session.remove(KEY);
  },
};
