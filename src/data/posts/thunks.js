import { postService } from '@/services';
import { setPost, setPosts } from './actions';

export const fetchPostsOfUser = (userId) => (dispatch) => {
  return postService.fetchPostsOfUser(userId).then((posts) => dispatch(setPosts(posts)));
};

export const addPost = (userId, contents) => (dispatch) => {
  return postService.addPost(userId, contents).then((post) => dispatch(setPost(post)));
};

export const toggleLikePost = (userId, postId) => (dispatch) => {
  return postService.toggleLike(userId, postId).then((post) => dispatch(setPost(post)));
};
