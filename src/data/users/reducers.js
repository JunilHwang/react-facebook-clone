import {SET_AUTH} from "@/data/users/actionTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        auth: payload
      };
    default:
      return state;
  }
};
