import React, { useEffect, useMemo } from 'react';
import css from 'styled-jsx/css';
import { useDispatch, useSelector } from 'react-redux';

import { PostForm, Post } from './post';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const byCreateAt = (left, right) => new Date(right.createAt) - new Date(left.createAt);

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
      <style jsx>{HomeStyle}</style>
    </div>
  );
};

const HomeStyle = css`
  .container {
    max-width: 600px;
  }
`;

export default React.memo(Home);
