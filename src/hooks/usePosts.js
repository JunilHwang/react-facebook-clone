import React, { useCallback, useState } from 'react';
import { PostService } from '../services';

export const usePosts = (writer) => {
  const [posts, setPosts] = useState(PostService.fetchPosts());

  const loadPost = useCallback(() => setPosts(PostService.fetchPosts()), [posts]);

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

  const toggleLike = useCallback(
    (post) => {
      validateAuth();
      PostService.toggleLike(post);
      loadPost();
    },
    [writer]
  );

  const handleFormSubmit = useCallback((event, callback) => {
    event.preventDefault();
    callback();
    event.target.reset();
  }, []);

  return { posts, addPost, addComment, toggleLike, handleFormSubmit };
};
