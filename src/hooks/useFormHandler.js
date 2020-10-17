import { useCallback } from 'react';

export const useFormHandler = (callback) => {

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    if (callback()) {
      event.target.reset();
    }
  }, [callback]);

  return { handleFormSubmit };
};
