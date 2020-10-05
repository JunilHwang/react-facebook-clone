import Storage from '../storage';

const KEY = 'users';

export default Object.freeze({
  findAll() {
    return Storage.get(KEY, []);
  },

  findBySeq(seq) {
    return this.findAll().find((v) => v.seq === seq);
  },

  saveAll(users) {
    Storage.set(KEY, users);
  },

  save(user) {
    if (!user) return;
    if (user.seq) return this.add(user);
    this.update(user);
  },

  add(user) {
    const users = this.findAll();
    users.push({
      ...user,
      seq: users.reduce((seq, post) => Math.max(seq, post.seq), 0),
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
