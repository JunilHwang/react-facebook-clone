import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCommentsOfPost } from '@/data/comments/selectors';
import { useAuth } from './useAuth';
import { commentsThunks } from '@/data/rootThunks';

export const useComments = (postId) => {
  const commentsOfPost = useSelector(selectCommentsOfPost(postId));
  const dispatch = useDispatch();
  const { auth: writer, validateAuth } = useAuth();

  const fetchComments = useCallback(() => {
    dispatch(commentsThunks.fetchComments(writer.seq, postId));
  }, [writer]);

  const addComment = useCallback(
    (contents) => {
      validateAuth();
      dispatch(commentsThunks.addComment(writer.seq, postId, contents));
    },
    [postId, writer]
  );

  return { commentsOfPost, addComment, fetchComments };
};
