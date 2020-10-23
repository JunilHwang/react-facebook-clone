import { commentService, postService } from '@/services';
import { setPost, setPosts } from './actions';
import { setComments } from '@/data/comments/actions';

export const fetchPostsOfUser = (userId) => async (dispatch) => {
  const posts = await postService.fetchPostsOfUser(userId);
  dispatch(setPosts(posts));
  const fetchAllCommentsOfPost = posts.map(({ seq }) => commentService.fetchComments(userId, seq));
  dispatch(
    setComments({
      postIds: posts.map(({ seq }) => seq),
      commentsByPost: await Promise.all(fetchAllCommentsOfPost),
    })
  );
};

export const addPost = (userId, contents) => async (dispatch) => {
  dispatch(setPost(await postService.addPost(userId, contents)));
};

export const toggleLikePost = (userId, postId) => async (dispatch) => {
  dispatch(setPost(await postService.toggleLike(userId, postId)));
};
