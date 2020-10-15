import * as ActionTypes from '@/data/rootActionTypes';

export function getComments(postId, comments) {
  return {
    type: ActionTypes.GET_COMMENTS,
    comments,
    postId,
  };
}

export function writeComment(postId, contents, writer) {
  return {
    type: ActionTypes.ADD_COMMENT,
    contents,
    writer,
    postId,
  };
}
