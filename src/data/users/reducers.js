import * as ActionTypes from '@/data/rootActionTypes';

const initialState = {
  name: 'harry',
  profileImageUrl:
    'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.SET_AUTH:
      return action.user;

    case ActionTypes.RESET_AUTH:
      return null;

    default:
      return state;
  }
}
