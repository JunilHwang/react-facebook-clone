import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import css from 'styled-jsx/css';
import { useDispatch, useSelector } from 'react-redux';

import { PostForm, Post } from './post';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const byCreateAt = (left, right) => new Date(right.createAt) - new Date(left.createAt);

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectors.posts.getPosts);
  const postsStatus = useSelector(selectors.posts.getStatus);
  const postList = useMemo(() => posts.sort(byCreateAt).map((post) => <Post key={post.seq} post={post} />), [posts]);
  const $bottom = useRef(null);

  useLayoutEffect(() => {
    let called = 0;
    const callback = ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(actions.posts.getNextPosts({ offset: called * 5 }));
        called += 1;
      }
      console.log(called);
    };
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 1,
    });
    observer.observe($bottom.current);
  }, []);

  return (
    <div className="posts container">
      <PostForm />
      {postsStatus.posts.cata({
        Loading: () => <div className="card">포스트 로딩 중</div>,
        Loaded: () => postList,
        Error: (message) => (
          <div className="card">
            <strong>{message}</strong>
          </div>
        ),
      })}
      {postsStatus.scroll.cata({
        Loading: () => <div className="card">포스트 로딩 중</div>,
        Loaded: () => null,
        Error: (message) => (
          <div className="card">
            <strong>{message}</strong>
          </div>
        ),
      })}
      <div ref={$bottom} />
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
