import { createActions } from 'redux-actions';
import {
  ADD_COMMENT,
  GET_COMMENTS,
  SET_COMMENTS,
  SET_COMMENT_STATUS,
} from './actionTypes';

export const {
  setComments,
  getComments,
  addComment,
  setCommentStatus,
} = createActions(
  SET_COMMENTS,
  GET_COMMENTS,
  ADD_COMMENT,
  SET_COMMENT_STATUS,
);
