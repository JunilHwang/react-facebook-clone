import React, { useCallback, useState } from 'react';
import { PostService } from '../services';
import { useAuth } from './useAuth';

export const usePosts = (writer) => {
  const [posts, setPosts] = useState(PostService.fetchPosts());

  const loadPost = () => setPosts(PostService.fetchPosts());

  const validateAuth = useCallback(() => {
    if (!writer) throw new Error('로그인 후 이용해주세요');
  }, [writer]);

  const addPost = useCallback(
    (contents) => {
      validateAuth();
      PostService.addPost({ contents, writer });
      loadPost();
    },
    [writer]
  );

  const addComment = useCallback(
    (post, contents) => {
      validateAuth();
      PostService.addComment(post, { contents, writer });
      loadPost();
    },
    [writer]
  );

  const toggleLike = (post) => {
    validateAuth();
    PostService.toggleLike(post);
    loadPost();
  };

  return { posts, addPost, addComment, toggleLike };
};
