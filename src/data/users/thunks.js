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
