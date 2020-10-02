import Storage from '../storage';

const KEY = 'posts';

export default Object.freeze({
  findAll() {
    return Storage.get(KEY, []);
  },

  findBySeq(seq) {
    return this.findAll().find((v) => v.seq === seq);
  },

  saveAll(posts) {
    Storage.set(KEY, posts);
  },

  save(post) {
    if (post.seq) return this.add(post);
    this.update(post);
  },

  add(post) {
    const posts = this.findAll();
    posts.push({
      ...post,
      seq: posts.reduce((seq, post) => Math.max(seq, post.seq), 0),
      createAt: Date.now(),
      likes: 0,
      comments: 0,
      likesOfMe: false,
      commentList: [],
    });
    this.saveAll(posts);
  },

  update(post) {
    const posts = this.findAll();
    const index = posts.findIndex(({ seq }) => post.seq === seq);
    posts[index] = post;
    this.saveAll(posts);
  },
});
