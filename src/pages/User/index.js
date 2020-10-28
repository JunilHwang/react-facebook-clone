import React, { useEffect, useMemo } from 'react';
import { Post } from '@/pages/Home/post';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const byCreateAt = (left, right) => new Date(right.createAt) - new Date(left.createAt);

const User = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectors.selectWriterOfURIParam);
  const posts = useSelector(selectors.posts.getPosts);
  const postList = useMemo(() => posts.sort(byCreateAt).map((post) => <Post key={post.seq} post={post} />), [posts]);

  useEffect(() => {
    dispatch(actions.posts.getPostsOfUser(userId));
  }, [userId]);

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
