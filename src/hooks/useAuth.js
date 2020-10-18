import React, { useCallback } from 'react';
import { userService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '@/data/users/selectors';
import { usersActions } from '@/data/rootActions';
import { usersThunks } from '@/data/rootThunks';

export const useAuth = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const signIn = useCallback((userInfo) => {}, []);

  const signUp = useCallback((userInfo) => {
    return userService.signUp(userInfo);
  }, []);

  const fetchAuth = useCallback(() => {
    dispatch(usersThunks.fetchAuth());
  }, []);

  const removeAuth = useCallback(() => {
    dispatch(usersThunks.removeAuth());
  }, []);

  const validateAuth = useCallback(() => {
    if (!auth) throw new Error('로그인 후 이용해주세요');
  }, [auth]);

  return { auth, signIn, signUp, fetchAuth, removeAuth, validateAuth };
};
