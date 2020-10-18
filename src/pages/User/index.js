import React, { useMemo } from 'react';
import { usePosts } from '@/hooks';
import Post from '@/pages/Home/post/Post';

const User = () => {
  const { posts, toggleLike: handleToggleLike } = usePosts();

  const postList = useMemo(
    () => posts.map((post) => <Post key={`post_${post.seq}`} post={post} onToggleLike={handleToggleLike} />),
    [posts]
  );

  return (
    <div className="container">
      {postList}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default User;
