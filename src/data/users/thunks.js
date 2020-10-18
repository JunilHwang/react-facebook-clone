import { userService } from '@/services';
import { setAuth } from './actions';

export const signIn = (userInfo) => (dispatch) => {
  return userService
    .setAuth(userInfo)
    .then((auth) => dispatch(setAuth(auth)))
    .catch((e) => alert(e.message));
};

export const fetchAuth = () => (dispatch) => {
  return userService
    .getAuth()
    .then((auth) => dispatch(setAuth(auth)))
    .catch((e) => {
      alert(e.message);
      dispatch(setAuth(null));
    });
};

export const removeAuth = () => (dispatch) => {
  return userService
    .removeAuth()
    .then(() => dispatch(setAuth(null)))
    .catch((e) => alert(e.message));
};
