import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPostsOrderByCreateAt } from '../data/posts/selectors';
import { postsActions } from '../data/rootActions';

export const usePosts = (writer) => {
  const posts = useSelector(selectAllPostsOrderByCreateAt);
  const dispatch = useDispatch();

  const validateAuth = useCallback(() => {
    if (!writer) throw new Error('로그인 후 이용해주세요');
  }, [writer]);

  const addPost = useCallback(
    (contents) => {
      validateAuth();
      dispatch(postsActions.addPost({ contents }));
    },
    [writer]
  );

  const toggleLike = useCallback(
    (post) => {
      validateAuth();
      dispatch(postsActions.togglePostLike(post));
    },
    [writer]
  );

  const handleFormSubmit = useCallback((event, callback) => {
    event.preventDefault();
    callback();
    event.target.reset();
  }, []);

  return { posts, addPost, toggleLike, handleFormSubmit };
};
