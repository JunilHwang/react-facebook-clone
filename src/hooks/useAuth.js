import React, { useCallback, useState } from 'react';
import { userService } from '../services';

export const useAuth = () => {
  const [user, setUser] = useState(userService.getAuth());

  const reloadAuth = (user) => setUser(user);

  const signIn = useCallback((userInfo) => {
    const user = userService.signIn(userInfo);
    if (user) reloadAuth(user);
    return user;
  }, []);

  const signUp = useCallback((userInfo) => {
    userService.signUp(userInfo);
  }, []);

  const removeAuth = useCallback(() => {
    userService.removeAuth();
    reloadAuth(null);
  }, []);

  return { user, signIn, signUp, removeAuth };
};
