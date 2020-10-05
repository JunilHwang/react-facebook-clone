import React, { useState } from 'react';
import UserService from '../services/UserService';

export const useAuth = () => {
  const [user, setUser] = useState(UserService.getAuth());

  const reloadAuth = () => setUser(UserService.getAuth());

  const signIn = (userInfo) => {
    UserService.signIn(userInfo);
    reloadAuth();
  };

  const signUp = (userInfo) => {
    UserService.signUp(userInfo);
  };

  return { user, signIn, signUp };
};
