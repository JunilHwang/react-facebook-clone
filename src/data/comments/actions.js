import { createActions } from 'redux-actions';
import {
  ADD_COMMENT,
  COMMENT_REQUEST_FAIL,
  COMMENT_REQUEST_LOADING,
  COMMENT_REQUEST_SUCCESS,
  GET_COMMENTS,
  SET_COMMENTS,
} from './actionTypes';

export const {
  setComments,
  getComments,
  addComment,
  commentRequestLoading,
  commentRequestSuccess,
  commentRequestFail,
} = createActions(
  SET_COMMENTS,
  GET_COMMENTS,
  ADD_COMMENT,
  COMMENT_REQUEST_LOADING,
  COMMENT_REQUEST_SUCCESS,
  COMMENT_REQUEST_FAIL
);
