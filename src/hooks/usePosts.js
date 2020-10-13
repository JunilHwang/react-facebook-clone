import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllPostsOrderByCreateAt } from '../data/posts/selectors';
import { postsActions } from '../data/rootActions';
import { useAuth } from './useAuth';

export const usePosts = () => {
  const posts = useSelector(selectAllPostsOrderByCreateAt);
  const dispatch = useDispatch();
  const { auth, validateAuth } = useAuth();

  const addPost = useCallback(
    (contents) => {
      validateAuth();
      dispatch(postsActions.addPost({ contents, writer: { ...auth } }));
    },
    [auth]
  );

  const toggleLike = useCallback(
    (post) => {
      validateAuth();
      dispatch(postsActions.togglePostLike(post));
    },
    [auth]
  );

  return { posts, addPost, toggleLike };
};
