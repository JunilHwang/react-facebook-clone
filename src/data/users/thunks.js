import { userService } from '@/services';
import { setAuth } from './actions';

export const signIn = (userInfo) => async (dispatch) => {
  const auth = await userService.setAuth(userInfo);
  dispatch(setAuth(auth));
};

export const fetchAuth = () => async (dispatch) => {
  const auth = await userService.getAuth();
  dispatch(setAuth(auth));
};

export const removeAuth = () => async (dispatch) => {
  await userService.removeAuth();
  dispatch(setAuth(null));
};
