import { postRepository } from '@/repositories';

export default Object.freeze({
  fetchPosts() {
    return postRepository.findAll();
  },

  addPost(post) {
    postRepository.add({
      ...post,
      createAt: Date.now(),
      likes: 0,
      likesOfMe: false,
    });
  },

  updatePost(post) {
    postRepository.update(post);
  },

  toggleLike(post) {
    const likesOfMe = !post.likesOfMe;
    const likes = post.likes + (likesOfMe ? 1 : -1);
    postRepository.update({ ...post, likesOfMe, likes });
  },
});
