import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

import { history } from '@/data/configureStore';
import { formStyle, buttonStyle, textHelpStyle, linkStyle } from '@/layouts/PublicLayout';
import { useAuth } from '@/hooks';

const SignIn = () => {
  const { signIn } = useAuth();
  const handleSignIn = useCallback(
    (event) => {
      event.preventDefault();

      const $form = event.target;
      const email = $form.email.value;
      const password = $form.password.value;

      signIn({ email, password })
        .then(() => {
          alert('로그인 되었습니다.');
          history.push('/');
          $form.reset();
        })
        .catch((e) => {
          alert(e.message);
          $form.password.focus();
        });
    },
    [signIn, history]
  );

  return (
    <>
      <h1 className="text-center">로그인</h1>
      <form className={formStyle.className} onSubmit={handleSignIn}>
        <input name="email" type="email" className="form-control" placeholder="Email" required />
        <input name="password" type="password" className="form-control" placeholder="Password" required />
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
