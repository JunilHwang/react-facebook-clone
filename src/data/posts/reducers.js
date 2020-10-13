import { ADD_POST, TOGGLE_POST_LIKE } from './actionTypes';
import { PostService } from '../../services';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      PostService.addPost(payload);
      return PostService.fetchPosts();
    case TOGGLE_POST_LIKE:
      PostService.toggleLike(payload);
      return PostService.fetchPosts();
    default:
      return PostService.fetchPosts();
  }
};
