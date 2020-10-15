import * as ActionTypes from '@/data/rootActionTypes';

export function logout() {
  return {
    type: ActionTypes.RESET_AUTH,
  };
}
