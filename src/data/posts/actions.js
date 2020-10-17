import { createActions } from 'redux-actions';
import { ADD_POST, TOGGLE_POST_LIKE } from './actionTypes';

export const { addPost, togglePostLike } = createActions(ADD_POST, TOGGLE_POST_LIKE);
