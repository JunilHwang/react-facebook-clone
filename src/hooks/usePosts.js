import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllPostsOrderByCreateAt } from '@/data/posts/selectors';
import { postsActions } from '@/data/rootActions';
import { useAuth } from './useAuth';

export const usePosts = () => {
  const posts = useSelector(selectAllPostsOrderByCreateAt);
  const dispatch = useDispatch();
  const { auth: writer, validateAuth } = useAuth();

  const addPost = useCallback(
    (contents) => {
      validateAuth();

      dispatch(postsActions.addPost({ contents, writer }));
    },
    [writer]
  );

  const toggleLike = useCallback(
    (post) => {
      validateAuth();
      dispatch(postsActions.togglePostLike(post));
    },
    [validateAuth]
  );

  return { posts, addPost, toggleLike };
};
