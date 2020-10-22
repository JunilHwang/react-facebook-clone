import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';
import Post from './Post';
import PostForm from './PostForm';

const byCreateAt = (left, right) => +new Date(right.createAt) - +new Date(left.createAt);

const Home = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectors.posts.getPosts);

  const postList = useMemo(() => posts.sort(byCreateAt).map((post) => <Post key={post.seq} post={post} />), [posts]);

  useEffect(() => {
    dispatch(actions.posts.getPosts());
  }, []);

  return (
    <div className="posts container">
      <PostForm />
      {postList}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Home;
