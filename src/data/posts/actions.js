import { createActions } from 'redux-actions';
import { SET_POST, SET_POSTS } from './actionTypes';

export const { setPost, setPosts } = createActions(SET_POST, SET_POSTS);
