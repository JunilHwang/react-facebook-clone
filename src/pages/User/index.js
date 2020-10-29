import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Post } from '@/pages/Home/post';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const byCreateAt = (left, right) => new Date(right.createAt) - new Date(left.createAt);

const User = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectors.selectWriterOfURIParam);
  const posts = useSelector(selectors.posts.getPosts);
  const postList = useMemo(() => posts.sort(byCreateAt).map((post) => <Post key={post.seq} post={post} />), [posts]);
  const $bottom = useRef(null);
  const $offset = useRef(0);

  const getNextPost = useCallback(() => {
    if ($offset.current === 0) {
      dispatch(actions.posts.getPostsOfUser({ userId }));
    } else {
      dispatch(actions.posts.getNextPostsOfUser({ userId, offset: $offset.current * 5 }));
    }
    $offset.current += 1;
  }, []);

  useInfiniteScroll($bottom, getNextPost);

  return (
    <div className="container">
      {postList}
      <div ref={$bottom}></div>
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default User;
