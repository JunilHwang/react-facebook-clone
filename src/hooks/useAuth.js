import React, {useCallback, useState} from 'react';
import UserService from '../services/UserService';

export const useAuth = () => {
  const [user, setUser] = useState(UserService.getAuth());

  const reloadAuth = (user) => setUser(user);

  const signIn = useCallback((userInfo) => {
    const user = UserService.signIn(userInfo);
    if (user) reloadAuth(user);
    return user;
  }, []);

  const signUp = useCallback((userInfo) => {
    UserService.signUp(userInfo);
  }, []);

  const removeAuth = useCallback(() => {
    UserService.removeAuth();
    reloadAuth(null);
  }, []);

  return { user, signIn, signUp, removeAuth };
};
