import * as ActionTypes from '@/data/rootActionTypes';

const initialState = {
  user: {
    seq: 1,
    name: 'harry',
    email: { address: 'tester00@gmail.com' },
    loginCount: 47,
    lastLoginAt: '2019-12-08T15:23:06.898',
    createAt: '2019-12-08T13:50:11.776',
  },
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return action.user;
    case ActionTypes.RESET_AUTH:
      return {};

    default:
      return state;
  }
}
