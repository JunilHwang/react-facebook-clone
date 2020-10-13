import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCommentsOfPost } from '../data/comments/selectors';
import { commentsActions } from '../data/rootActions';
import { useAuth } from './useAuth';

export const useComments = (postSeq) => {
  const commentsOfPost = useSelector(selectCommentsOfPost(postSeq));
  const dispatch = useDispatch();
  const { auth: writer, validateAuth } = useAuth();

  const addComment = useCallback(
    (contents) => {
      validateAuth();
      dispatch(commentsActions.addComment({ postSeq, writer, contents }));
    },
    [postSeq, writer]
  );

  return { commentsOfPost, addComment };
};
