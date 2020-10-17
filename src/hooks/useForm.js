import { useCallback, useLayoutEffect } from 'react';

export const useForm = ($contentRef) => {

  useLayoutEffect(() => {
    const handleContentInput = () => {
      const { scrollHeight, clientHeight } = $contentRef.current;
      if (scrollHeight !== clientHeight) {
        $contentRef.current.style.height = scrollHeight + 'px';
      }
    };
    $contentRef?.current?.addEventListener('input', handleContentInput);
    return () => {
      $contentRef?.current?.removeEventListener('input', handleContentInput);
    };
  }, [$contentRef]);

  const handleFormSubmit = useCallback((event, callback) => {
    event.preventDefault();
    if (callback()) {
      event.target.reset();
    }
  }, []);

  return { handleFormSubmit };
};
