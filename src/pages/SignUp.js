import React from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle, formStyle, linkStyle, textHelpStyle } from '../layouts/PublicLayout';
import css from 'styled-jsx/css';

const SignUp = () => {
  return (
    <>
      <h1 className="text-center">계정 만들기</h1>
      <form className={formStyle.className}>
        <input type="email" className="form-control" placeholder="Email" required />
        <input type="text" className="form-control" placeholder="Your Name" required />
        <input type="file" className="form-control" placeholder="Profile" />
        <input type="password" className="form-control" placeholder="Password" minLength="5" required />
        <input type="password" className="form-control" placeholder="Repeat your password" required />
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
    margin-bottom: 1rem;
  }
`;

export default SignUp;
