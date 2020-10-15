import React, { useMemo, useEffect } from 'react';
import Post from '../Home/Post';
import { getLocation } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const User = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(selectors.posts.getPosts);
  // TODO: discuss with Harry
  // const userName = props.computedMatch?.params?.name;
  const location = useSelector(getLocation);
  const userName = location?.pathname?.replace(/\/u\//, '');

  const posts = useMemo(
    () => postsState.ids.map((id) => postsState.entities[id]).filter((each) => each?.writer?.name === userName),
    [postsState.entities, postsState.ids]
  );

  const postList = useMemo(() => posts.map((post) => <Post key={post.seq} post={post} />), [posts, userName]);

  useEffect(() => {
    dispatch(actions.posts.getPosts());
  }, []);

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
