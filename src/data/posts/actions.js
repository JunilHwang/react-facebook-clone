import * as ActionTypes from '@/data/rootActionTypes';

export function writePost(contents, user) {
  return {
    type: ActionTypes.ADD_POST,
    contents,
    user,
  };
}

export function getPosts() {
  return {
    type: ActionTypes.GET_POSTS,
  };
}

export function likePost(postId) {
  return {
    type: ActionTypes.LIKE_POST,
    postId,
  };
}
