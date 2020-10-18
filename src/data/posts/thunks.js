import { commentService, postService } from '@/services';
import { setPost, setPosts } from './actions';
import { setComments } from '@/data/comments/actions';

export const fetchPostsOfUser = (userId) => async (dispatch) => {
  try {
    const posts = await postService.fetchPostsOfUser(userId);
    dispatch(setPosts(posts));
    const fetchAllCommentsByPost = posts.map(({ seq }) => commentService.fetchComments(userId, seq));
    dispatch(
      setComments({
        postIds: posts.map(({ seq }) => seq),
        commentsByPost: await Promise.all(fetchAllCommentsByPost),
      })
    );
  } catch (e) {
    alert(e.message);
  }
};

export const addPost = (userId, contents) => async (dispatch) => {
  try {
    const post = await postService.addPost(userId, contents);
    dispatch(setPost(post));
  } catch (e) {
    alert(e.message);
  }
};

export const toggleLikePost = (userId, postId) => async (dispatch) => {
  try {
    const post = await postService.toggleLike(userId, postId);
    dispatch(setPost(post));
  } catch (e) {
    alert(e.message);
  }
};
