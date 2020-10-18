import { postService } from '@/services';
import { setPost, setPosts } from '@/data/posts/actions';

export const fetchPostsOfUser = (userId) => async (dispatch) => {
  const posts = await postService.fetchPostsOfUser(userId);
  dispatch(setPosts(posts));
};

export const addPost = (userId, contents) => async (dispatch) => {
  const post = await postService.addPost(userId, contents);
  dispatch(setPost(post));
};

export const toggleLikePost = (userId, postId) => async (dispatch) => {
  const post = await postService.toggleLike(userId, postId);
  dispatch(setPost(post));
};
