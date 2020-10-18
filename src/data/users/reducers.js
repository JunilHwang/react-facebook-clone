import { SET_AUTH } from '@/data/users/actionTypes';

export default (state = { auth: null }, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        auth: payload,
      };
    default:
      return state;
  }
};
