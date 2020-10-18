import React, { useCallback } from 'react';
import { userService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '@/data/users/selectors';
import { usersThunks } from '@/data/rootThunks';

export const useAuth = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  const signIn = useCallback((userInfo) => dispatch(usersThunks.signIn(userInfo)), []);

  const signUp = useCallback(async (formData) => {
    if (formData.get('credentials') !== formData.get('repeatCredentials')) {
      throw new Error('옳바른 비밀번호를 입력해주세요');
    }
    await userService.validateExists(formData.get('principal'));
    await userService.signUp(formData);
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
