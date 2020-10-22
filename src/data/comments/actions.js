import * as ActionTypes from '@/data/rootActionTypes';
import apis from '@/services/apis';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';

export const setComments = (postId, comments) => ({
  type: ActionTypes.SET_COMMENTS,
  postId,
  comments,
});

export const getComments = (userId, postId) => async (dispatch) => {
  try {
    const comments = await apis.postsApi.getCommentList({ userId, postId });
    dispatch(actions.comments.setComments(postId, comments));
  } catch (error) {
    alert(error.message);
  }
};

export const createComment = ({ postWriterId, postId, contents, resetForm }) => async (dispatch) => {
  try {
    await apis.postsApi.createComment({ userId: postWriterId, postId, contents });
    dispatch(actions.comments.getComments(postWriterId, postId));
    resetForm();
  } catch (error) {
    alert(error.message);
  }
};
