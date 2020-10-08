import { repository } from '../storages';

const KEY = 'posts';

export default Object.freeze({
  findAll() {
    return repository.get(KEY, []);
  },

  findBySeq(seq) {
    return this.findAll().find((v) => v.seq === seq);
  },

  saveAll(posts) {
    repository.set(KEY, posts);
  },

  upsert(post) {
    if (!post) return;
    if (post.seq === undefined) return this.add(post);
    this.update(post);
  },

  add(post) {
    const posts = this.findAll();
    posts.push({
      ...post,
      seq: posts.map((v) => v.seq).reduce(Math.max, 0) + 1,
    });
    this.saveAll(posts);
  },

  update(post) {
    const posts = this.findAll();
    const index = posts.findIndex(({ seq }) => post.seq === seq);
    if (index === -1) throw new Error('수정이 불가능한 포스트입니다.');
    posts[index] = post;
    this.saveAll(posts);
  },
});
