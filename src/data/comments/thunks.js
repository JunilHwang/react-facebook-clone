import { commentService } from '@/services';
import { setComment, setCommentsOfPost } from './actions';

export const fetchComments = (userId, postId) => (dispatch) => {
  return commentService
    .fetchComments(userId, postId)
    .then((comments) => dispatch(setCommentsOfPost({ postId, comments })));
};

export const addComment = (userId, postId, contents) => (dispatch) => {
  return commentService
    .addComment(userId, postId, contents)
    .then((comment) => dispatch(setComment({ postId, comment })));
};
