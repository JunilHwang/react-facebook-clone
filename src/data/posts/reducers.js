import { ADD_POST, TOGGLE_POST_LIKE } from './actionTypes';
import { postService } from '@/services';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      postService.addPost(payload);
      return postService.fetchPosts();
    case TOGGLE_POST_LIKE:
      postService.toggleLike(payload);
      return postService.fetchPosts();
    default:
      return postService.fetchPosts();
  }
};
