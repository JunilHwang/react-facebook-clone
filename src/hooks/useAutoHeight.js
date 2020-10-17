import { useLayoutEffect, useRef } from 'react';

export const useAutoHeight = () => {
  const $contentRef = useRef(null);

  useLayoutEffect(() => {
    const { scrollHeight, clientHeight } = $contentRef.current;
    if (scrollHeight !== clientHeight) {
      $contentRef.current.style.height = scrollHeight + 'px';
    }
  }, [$contentRef]);

  return $contentRef;
};
