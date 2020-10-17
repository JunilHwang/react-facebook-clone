import { FETCH_AUTH, REMOVE_AUTH } from './actionTypes';
import { userService } from '../../services';

export default (state, { type }) => {
  switch (type) {
    case FETCH_AUTH:
      return {
        auth: userService.getAuth(),
      };
    case REMOVE_AUTH:
      userService.removeAuth();
      return {
        auth: null,
      };
    default:
      return state;
  }
};
