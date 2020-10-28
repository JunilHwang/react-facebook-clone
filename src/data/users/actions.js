import { createActions } from 'redux-actions';
import {
  LOGOUT,
  SET_USER,
  AUTH_USER,
  SIGN_UP,
  RELOAD_USER,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAIL,
  USER_REQUEST_LOADING,
} from './actionTypes';

export const {
  logout,
  setUser,
  authUser,
  signUp,
  reloadUser,
  userRequestSuccess,
  userRequestFail,
  userRequestLoading,
} = createActions(
  LOGOUT,
  SET_USER,
  AUTH_USER,
  SIGN_UP,
  RELOAD_USER,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAIL,
  USER_REQUEST_LOADING
);
