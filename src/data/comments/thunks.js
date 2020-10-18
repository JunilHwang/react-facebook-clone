import { commentService } from '@/services';
import { setComment, setCommentsOfPost } from './actions';

export const fetchComments = (userId, postId) => async (dispatch) => {
  const comments = await commentService.fetchComments(userId, postId);
  dispatch(setCommentsOfPost({ postId, comments }));
};

export const addComment = (userId, postId, contents) => async (dispatch) => {
  const comment = await commentService.addComment(userId, postId, contents);
  dispatch(setComment({ postId, comment }));
};
