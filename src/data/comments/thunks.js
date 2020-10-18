import { commentService } from '@/services';
import { setComment, setComments } from './actions';

export const fetchComments = (userId, postId) => async (dispatch) => {
  const comments = await commentService.fetchComments(userId, postId);
  dispatch(setComments(comments.map((comment) => ({ ...comment, postId }))));
};

export const addComment = (userId, postId, contents) => async (dispatch) => {
  const comment = await commentService.addComment(userId, postId, contents);
  dispatch(setComment({ ...comment, postId }));
};
