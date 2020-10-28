import { createActions } from 'redux-actions';
import {
  SET_POSTS,
  ADD_POST,
  GET_POSTS,
  GET_POSTS_OF_USER,
  LIKE_POST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_LOADING,
  POST_REQUEST_FAIL,
} from './actionTypes';

export const {
  setPosts,
  addPost,
  getPosts,
  getPostsOfUser,
  likePost,
  postRequestSuccess,
  postRequestLoading,
  postRequestFail,
} = createActions(
  SET_POSTS,
  ADD_POST,
  GET_POSTS,
  GET_POSTS_OF_USER,
  LIKE_POST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_LOADING,
  POST_REQUEST_FAIL
);
