import React, { useCallback, useState } from 'react';
import { PostService } from '../services';
import { useAuth } from './useAuth';

export const usePosts = () => {
  const { user: writer } = useAuth();
  const [posts, setPosts] = useState(PostService.fetchPosts());

  const loadPost = () => setPosts(PostService.fetchPosts());

  const addPost = useCallback(
    (contents) => {
      PostService.addPost({ contents, writer });
      loadPost();
    },
    [writer]
  );

  const addComment = useCallback(
    (post, contents) => {
      PostService.addComment(post, { contents, writer });
      loadPost();
    },
    [writer]
  );

  const toggleLike = (post) => {
    PostService.toggleLike(post);
    loadPost();
  };

  return { posts, addPost, addComment, toggleLike };
};
