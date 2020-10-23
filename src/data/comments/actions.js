import { createActions } from 'redux-actions';
import { SET_COMMENT, SET_COMMENTS, SET_COMMENTS_OF_POST } from './actionTypes';

export const { setComment, setComments, setCommentsOfPost } = createActions(
  SET_COMMENT,
  SET_COMMENTS,
  SET_COMMENTS_OF_POST
);
