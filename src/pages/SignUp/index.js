import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle, formStyle, linkStyle, textHelpStyle } from '../../layouts/PublicLayout';
import css from 'styled-jsx/css';
import { useAuth } from '@/hooks';

const SignUp = () => {
  const { signUp } = useAuth();

  const handleSignUp = useCallback(
    (event) => {
      event.preventDefault();
      const $form = event.target;

      signUp(new FormData($form))
        .then(() => {
          alert('회원가입이 완료되었습니다.');
          $form.reset();
        })
        .catch((e) => alert(e.message));
    },
    [signUp]
  );

  return (
    <>
      <h1 className="text-center">계정 만들기</h1>
      <form className={formStyle.className} onSubmit={handleSignUp}>
        <input name="principal" type="email" className="form-control" placeholder="Email" required />
        <input name="name" type="text" className="form-control" placeholder="Your Name" required />
        <input name="file" type="file" className="form-control" placeholder="Profile" accept="image/*" />
        <input
          name="credentials"
          type="password"
          className="form-control"
          placeholder="Password"
          minLength="5"
          required
        />
        <input
          name="repeatCredentials"
          type="password"
          className="form-control"
          placeholder="Repeat your password"
          required
        />
        <button className={`btn btn-lg btn-primary btn-block ${buttonStyle.className}`} type="submit">
          가입하기
        </button>
      </form>
      <p className={`text-center ${textHelpStyle.className}`}>
        이미 계정이 있으신가요?
        <Link className={`text-center ${linkStyle.className}`} to="/login">
          로그인 하기
        </Link>
      </p>
      <style jsx>{signUpStyle}</style>
      {formStyle.styles}
      {buttonStyle.styles}
      {textHelpStyle.styles}
      {linkStyle.styles}
    </>
  );
};

export const signUpStyle = css`
  input.form-control {
    font-size: 16px;
    height: auto;
    padding: 10px;
    margin-bottom: 1rem;
  }
`;

export default SignUp;
