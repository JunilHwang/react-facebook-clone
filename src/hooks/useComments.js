import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCommentsOfPost } from '../data/comments/selectors';
import { commentsActions } from '../data/rootActions';
import { useAuth } from './useAuth';

export const useComments = (post) => {
  const commentsOfPost = useSelector(selectCommentsOfPost(post));
  const dispatch = useDispatch();
  const { user: writer, validateAuth } = useAuth();

  const addComment = useCallback(
    (contents) => {
      validateAuth();
      const postSeq = post.seq;
      dispatch(commentsActions.addComment({ postSeq, writer, contents }));
    },
    [post, writer]
  );

  return { commentsOfPost, addComment };
};
