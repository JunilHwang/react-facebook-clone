import { createActions } from 'redux-actions';
import {
  LOGOUT,
  SET_USER,
  ADD_USER,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAIL,
  USER_REQUEST_LOADING,
} from './actionTypes';

export const { logout, setUser, addUser, userRequestSuccess, userRequestFail, userRequestLoading } = createActions(
  LOGOUT,
  SET_USER,
  ADD_USER,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAIL,
  USER_REQUEST_LOADING
);
