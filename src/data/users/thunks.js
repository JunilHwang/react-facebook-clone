import { userService } from '@/services';
import { setAuth } from './actions';

export const signIn = (userInfo) => async (dispatch) => {
  try {
    await userService.validateExists(userInfo.email);
    const auth = await userService.setAuth(userInfo);
    dispatch(setAuth(auth));
  } catch (e) {
    alert(e.message);
  }
};

export const fetchAuth = () => async (dispatch) => {
  const auth = await userService.getAuth();
  dispatch(setAuth(auth));
};

export const removeAuth = () => async (dispatch) => {
  await userService.removeAuth();
  dispatch(setAuth(null));
};
