import React, { useCallback } from 'react';
import { userService } from '../services';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../data/users/selectors';
import { usersActions } from '../data/rootActions';

export const useAuth = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const signIn = useCallback((userInfo) => {
    return !!userService.signIn(userInfo);
  }, []);

  const signUp = useCallback((userInfo) => {
    userService.signUp(userInfo);
  }, []);

  const fetchAuth = useCallback(() => {
    dispatch(usersActions.fetchAuth());
  }, []);

  const removeAuth = useCallback(() => {
    dispatch(usersActions.removeAuth());
  }, []);

  const validateAuth = useCallback(() => {
    if (!auth) throw new Error('로그인 후 이용해주세요');
  }, [auth]);

  return { auth, signIn, signUp, fetchAuth, removeAuth, validateAuth };
};
