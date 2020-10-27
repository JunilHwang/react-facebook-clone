import * as ActionTypes from '@/data/rootActionTypes';
import { apis } from '@/services';

export const setComments = (postId, comments) => ({
  type: ActionTypes.SET_COMMENTS,
  postId,
  comments,
});

export const getComments = (userId, postId) => async (dispatch) => {
  try {
    const comments = await apis.postsApi.getCommentList({ userId, postId });
    dispatch(setComments(postId, comments));
  } catch (error) {
    alert(error.message);
  }
};

export const createComment = ({ postWriterId, postId, contents, resetForm }) => async (dispatch) => {
  try {
    await apis.postsApi.createComment({ userId: postWriterId, postId, contents });
    dispatch(getComments(postWriterId, postId));
    resetForm();
  } catch (error) {
    alert(error.message);
  }
};
