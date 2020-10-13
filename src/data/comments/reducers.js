import { ADD_COMMENT } from './actionTypes';
import { commentService } from '../../services';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      commentService.addComment(payload);
      return commentService.fetchComments();
    default:
      return commentService.fetchComments();
  }
};
