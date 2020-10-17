import { createActions } from 'redux-actions';
import { ADD_POST, TOGGLE_LIKE_POST } from './actionTypes';

export const { addPost, togglePostLike } = createActions(ADD_POST, TOGGLE_LIKE_POST);
