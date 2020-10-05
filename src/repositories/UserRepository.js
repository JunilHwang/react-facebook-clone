import { repository } from '../storages';

const KEY = 'users';

export default Object.freeze({
  findAll() {
    return repository.get(KEY, []);
  },

  findBySeq(seq) {
    return this.findAll().find((v) => v.seq === seq);
  },

  findByEmail(email) {
    return this.findAll().find((v) => v.email === email);
  },

  findByEmailAndPassword({ email, password }) {
    return this.findAll().find((v) => v.email === email && v.password === password);
  },

  saveAll(users) {
    repository.set(KEY, users);
  },

  save(user) {
    if (!user) return;
    if (user.seq === undefined) return this.add(user);
    this.update(user);
  },

  add(user) {
    const users = this.findAll();
    users.push({
      ...user,
      seq: users.map((v) => v.seq).reduce(Math.max, 0) + 1,
    });
    this.saveAll(users);
  },

  update(user) {
    const users = this.findAll();
    const index = users.findIndex(({ seq }) => user.seq === seq);
    if (index === -1) throw new Error('수정이 불가능한 유저 정보입니다.');
    users[index] = user;
    this.saveAll(users);
  },
});
