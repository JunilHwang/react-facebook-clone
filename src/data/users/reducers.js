import { FETCH_AUTH } from './actionTypes';
import { userService } from '../../services';

export default (state, { type }) => {
  switch (type) {
    case FETCH_AUTH:
      return {
        auth: userService.getAuth()
      };
    default:
      return {
        auth: null
      };
  }
};
