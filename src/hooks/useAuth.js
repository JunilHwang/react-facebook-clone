import React, { useCallback } from 'react';
import { userService } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../data/users/selectors';
import { usersActions } from '../data/rootActions';

export const useAuth = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const signIn = useCallback((userInfo) => {
    const user = userService.signIn(userInfo);
    if (user) dispatch(usersActions.fetchAuth());
    return !!user;
  }, []);

  const signUp = useCallback((userInfo) => {
    userService.signUp(userInfo);
  }, []);

  const removeAuth = useCallback(() => {
    dispatch(usersActions.removeAuth());
  }, []);

  return { auth, signIn, signUp, removeAuth };
};
