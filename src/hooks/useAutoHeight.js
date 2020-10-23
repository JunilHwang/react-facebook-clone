import { useLayoutEffect, useRef } from 'react';

export const useAutoHeight = () => {
  const $contentRef = useRef(null);

  useLayoutEffect(() => {
    const handleInput = () => {
      $contentRef.current.style.height = 'auto';
      const { scrollHeight, clientHeight } = $contentRef.current;
      if (scrollHeight !== clientHeight) {
        $contentRef.current.style.height = scrollHeight + 'px';
      }
    };
    $contentRef?.current?.addEventListener('input', handleInput);
    return () => $contentRef?.current?.removeEventListener('input', handleInput);
  }, [$contentRef]);

  return $contentRef;
};
