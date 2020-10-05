import React, { useState } from 'react';
import UserService from '../services/UserService';

export const useAuth = () => {
  const [user, setUser] = useState(UserService.getAuth());

  const reloadAuth = (user) => setUser(user);

  const signIn = (userInfo) => {
    const user = UserService.signIn(userInfo);
    if (user) reloadAuth(user);
    return user;
  };

  const signUp = (userInfo) => {
    UserService.signUp(userInfo);
  };

  const removeAuth = () => {
    UserService.removeAuth();
    reloadAuth(null);
  };

  return { user, signIn, signUp, removeAuth };
};
