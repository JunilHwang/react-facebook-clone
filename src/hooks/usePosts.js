import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllPostsOrderByCreateAt } from '@/data/posts/selectors';
import { useAuth } from './useAuth';
import { postsThunks } from '@/data/rootThunks';

export const usePosts = () => {
  const posts = useSelector(selectAllPostsOrderByCreateAt);
  const dispatch = useDispatch();
  const { auth: writer, validateAuth } = useAuth();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(postsThunks.fetchPostsOfUser(1));
    }
  }, [posts, writer]);

  const addPost = useCallback(
    (contents) => {
      validateAuth();
      dispatch(postsThunks.addPost(writer.seq, contents));
    },
    [writer]
  );

  const toggleLike = useCallback(
    ({ seq }) => {
      validateAuth();
      dispatch(postsThunks.toggleLikePost(writer.seq, seq));
    },
    [validateAuth]
  );

  return { posts, addPost, toggleLike };
};
