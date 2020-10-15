import React, { useEffect, useMemo } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';

const Home = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(selectors.posts.getPosts);

  const posts = useMemo(() => postsState.ids.map((id) => postsState.entities[id]), [
    postsState.entities,
    postsState.ids,
  ]);

  const postList = useMemo(() => posts.map((post) => <Post key={post.seq} post={post} />), [posts]);

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
