import * as ActionTypes from '@/data/rootActionTypes';
import * as actions from '@/data/rootActions';
import apis from '@/services/apis';

export const logout = () => ({
  type: ActionTypes.RESET_AUTH,
});

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  user,
});

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
