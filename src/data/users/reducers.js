import { SET_AUTH } from '@/data/users/actionTypes';

export default (state = { user: null, apiToken: null }, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      console.log(payload);
      const { user = null, apiToken = null } = payload || {};
      return { user, apiToken };
    default:
      return state;
  }
};
