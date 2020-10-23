import { commentService } from '@/services';
import { setComment, setCommentsOfPost } from './actions';

export const fetchComments = (userId, postId) => async (dispatch) => {
  dispatch(
    setCommentsOfPost({
      comments: await commentService.fetchComments(userId, postId),
      postId,
    })
  );
};

export const addComment = (userId, postId, contents) => async (dispatch) => {
  dispatch(
    setComment({
      comment: await commentService.addComment(userId, postId, contents),
      postId,
    })
  );
};
