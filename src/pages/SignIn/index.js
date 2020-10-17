import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

import { history } from '@/data/configureStore';
import { formStyle, buttonStyle, textHelpStyle, linkStyle } from '@/layouts/PublicLayout';
import { useAuth } from '@/hooks';

const SignIn = () => {
  const { signIn } = useAuth();
  const $email = useRef();
  const $password = useRef();

  const handleSignIn = useCallback(
    (event) => {
      event.preventDefault();

      const email = $email.current.value;
      const password = $password.current.value;

      if (!signIn({ email, password })) {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        $password.current.focus();
        return;
      }

      alert('로그인 되었습니다.');
      history.push('/');

      event.target.reset();
    },
    [signIn, history]
  );

  return (
    <>
      <h1 className="text-center">로그인</h1>
      <form className={formStyle.className} onSubmit={handleSignIn}>
        <input ref={$email} type="email" className="form-control" placeholder="Email" required />
        <input ref={$password} type="password" className="form-control" placeholder="Password" required />
        <button className={`btn btn-lg btn-primary btn-block ${buttonStyle.className}`} type="submit">
          로그인
        </button>
      </form>
      <p className={`text-center ${textHelpStyle.className}`}>
        계정이 필요하신가요?
        <Link className={`text-center ${linkStyle.className}`} to="/signup">
          계정 만들기
        </Link>
      </p>
      <style jsx>{inputStyle}</style>
      {formStyle.styles}
      {buttonStyle.styles}
      {textHelpStyle.styles}
      {linkStyle.styles}
    </>
  );
};

export const inputStyle = css`
  input.form-control {
    font-size: 16px;
    height: auto;
    padding: 10px;
  }
`;

export default SignIn;
