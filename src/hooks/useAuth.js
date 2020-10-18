import React, { useCallback } from 'react';
import { userService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '@/data/users/selectors';
import { usersThunks } from '@/data/rootThunks';
import { AuthErrorMessage } from '@/constants';

export const useAuth = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const signIn = useCallback((userInfo) => dispatch(usersThunks.signIn(userInfo)), []);

  const signUp = useCallback((formData) => userService.signUp(formData), []);

  const fetchAuth = useCallback(() => {
    dispatch(usersThunks.fetchAuth());
  }, []);

  const removeAuth = useCallback(() => {
    dispatch(usersThunks.removeAuth());
  }, []);

  const validateAuth = useCallback(() => {
    if (!auth) throw new Error(AuthErrorMessage.NONE_AUTH);
  }, [auth]);

  const ErrorWrapper = useCallback((msg) => <div style={{ color: '#d00', fontSize: '13px' }}>{msg}</div>, []);

  return { auth, signIn, signUp, fetchAuth, removeAuth, validateAuth, ErrorWrapper };
};
