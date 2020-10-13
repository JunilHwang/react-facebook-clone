import { ADD_POST, FETCH_POSTS, TOGGLE_POST_LIKE } from './actionTypes';
import { PostService } from '../../services';

export default (state, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return normalizingStateShapeOf(PostService.fetchPosts());
    case ADD_POST:
      PostService.addPost(payload);
      return normalizingStateShapeOf(PostService.fetchPosts());
    case TOGGLE_POST_LIKE:
      PostService.toggleLike(payload);
      return normalizingStateShapeOf(PostService.fetchPosts());
    default:
      return {
        entries: {},
        ids: [],
      };
  }
};
