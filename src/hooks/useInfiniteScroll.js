import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '@/data/rootActions';

export const useInfiniteScroll = ($target, action) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    let called = 0;
    dispatch(actions.posts.setPosts([]));
    const callback = ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(action({ offset: called * 5 }));
        called += 1;
      }
      console.log(called);
    };
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '50px',
      threshold: 1,
    });
    observer.observe($target.current);
  }, [$target, action]);
};
