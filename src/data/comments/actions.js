import { createActions } from 'redux-actions';
import { SET_COMMENT, SET_COMMENTS } from './actionTypes';

export const { setComment, setComments } = createActions(SET_COMMENT, SET_COMMENTS);
