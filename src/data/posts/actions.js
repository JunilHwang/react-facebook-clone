import { createActions } from 'redux-actions';
import {
  SET_POSTS,
  ADD_POST,
  GET_POSTS,
  GET_NEXT_POSTS,
  GET_POSTS_OF_USER,
  GET_NEXT_POSTS_OF_USER,
  LIKE_POST,
  SET_STATUS_ADD_POST,
  SET_STATUS_LOAD_POST,
  SET_STATUS_SCROLL_POST,
} from './actionTypes';

export const {
  setPosts,
  addPost,
  getPosts,
  getNextPosts,
  getPostsOfUser,
  getNextPostsOfUser,
  likePost,
  setStatusAddPost,
  setStatusLoadPost,
  setStatusScrollPost,
} = createActions(
  SET_POSTS,
  ADD_POST,
  GET_POSTS,
  GET_NEXT_POSTS,
  GET_POSTS_OF_USER,
  GET_NEXT_POSTS_OF_USER,
  LIKE_POST,
  SET_STATUS_ADD_POST,
  SET_STATUS_LOAD_POST,
  SET_STATUS_SCROLL_POST
);
