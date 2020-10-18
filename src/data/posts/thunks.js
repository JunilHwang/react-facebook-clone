import { commentService, postService } from '@/services';
import { setPost, setPosts } from './actions';
import { setComments } from '@/data/comments/actions';

export const fetchPostsOfUser = (userId) => (dispatch) =>
  postService
    .fetchPostsOfUser(userId)
    .then((posts) => {
      dispatch(setPosts(posts));
      const postIds = posts.map(({ seq }) => seq);
      const fetchAllCommentsByPost = postIds.map((postId) => commentService.fetchComments(userId, postId));
      return Promise.all(fetchAllCommentsByPost)
        .then((commentsByPost) => dispatch(setComments({ postIds, commentsByPost })))
        .catch((e) => {
          throw new Error(e);
        });
    })
    .catch((e) => alert(e.message));

export const addPost = (userId, contents) => (dispatch) =>
  postService
    .addPost(userId, contents)
    .then((post) => dispatch(setPost(post)))
    .catch((e) => alert(e.message));

export const toggleLikePost = (userId, postId) => (dispatch) =>
  postService
    .toggleLike(userId, postId)
    .then((post) => dispatch(setPost(post)))
    .catch((e) => alert(e.message));
