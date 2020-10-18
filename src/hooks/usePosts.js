import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllPostsOrderByCreateAt } from '@/data/posts/selectors';
import { useAuth } from './useAuth';
import { postsThunks } from '@/data/rootThunks';
import { selectWriterOfURIParam } from '@/data/rootSelectors';

export const usePosts = () => {
  const posts = useSelector(selectAllPostsOrderByCreateAt);
  const dispatch = useDispatch();
  const { auth: writer, validateAuth } = useAuth();
  const userId = useSelector(selectWriterOfURIParam);

  useEffect(() => {
    if (posts.length === 0) {
      fetchPostsOfUser(1);
    }
  }, [posts, writer]);

  useEffect(() => {
    if (userId !== null) {
      fetchPostsOfUser(userId);
    }
  }, [userId]);

  const fetchPostsOfUser = useCallback((userId) => dispatch(postsThunks.fetchPostsOfUser(userId)), []);

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
