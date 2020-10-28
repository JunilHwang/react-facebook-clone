import * as ActionTypes from '@/data/rootActionTypes';
import * as actions from '@/data/rootActions';
import { apis } from '@/services';
import { createActions } from 'redux-actions';
import { USER_REQUEST_FAIL, USER_REQUEST_LOADING, USER_REQUEST_SUCCESS } from '@/data/rootActionTypes';

export const logout = () => ({
  type: ActionTypes.RESET_AUTH,
});

export const setUser = (payload) => ({
  type: ActionTypes.SET_USER,
  payload,
});

export const addUser = (payload) => ({
  type: ActionTypes.ADD_USER,
  payload,
});

export const [userRequestSuccess, userRequestFail, userRequestLoading] = createActions(
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAIL,
  USER_REQUEST_LOADING
);

export const login = ({ email, password }) => async (dispatch) => {
  try {
    await apis.authApi.login({ principal: email, credentials: password });
    // TODO: After finishing the mission of week 4, we should save user in Redux after login
    dispatch(actions.router.push('/'));
  } catch (error) {
    alert(error.message);
  }
};

export const register = (formValues) => async (dispatch) => {
  try {
    await apis.usersApi.register(formValues);
    // TODO: After finishing the mission of week 4, we should save user in Redux after register
    dispatch(actions.router.push('/'));
  } catch (error) {
    alert(error.message);
  }
};
