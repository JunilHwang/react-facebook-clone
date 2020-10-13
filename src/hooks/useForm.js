import { useCallback } from 'react';

export const useForm = () => {
  const handleFormSubmit = useCallback((event, callback) => {
    event.preventDefault();
    if (callback()) {
      event.target.reset();
    }
  }, []);

  return { handleFormSubmit };
};
