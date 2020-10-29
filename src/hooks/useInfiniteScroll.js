import { useLayoutEffect } from 'react';

export const useInfiniteScroll = ($target, callback) => {
  useLayoutEffect(() => {
    if ($target === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 1,
      }
    );
    observer.observe($target.current);
  }, []);
};
