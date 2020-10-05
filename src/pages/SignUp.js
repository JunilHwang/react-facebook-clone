import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { buttonStyle, formStyle, linkStyle, textHelpStyle } from '../layouts/PublicLayout';
import css from 'styled-jsx/css';

const defaultProfileImageUrl = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';
const fileReader = new FileReader();

const SignUp = ({ onSignUp }) => {
  const [profileImageUrl, setProfileImageUrl] = useState(defaultProfileImageUrl);

  const $email = useRef();
  const $name = useRef();
  const $password = useRef();
  const $repeatPassword = useRef();

  const handleSignUp = useCallback(
    (event) => {
      event.preventDefault();

      const email = $email.current.value;
      const name = $name.current.value;
      const password = $password.current.value;

      if (password !== $repeatPassword.current.value) {
        alert('옳바른 비밀번호를 입력해주세요');
        return $repeatPassword.current.focus();
      }

      onSignUp({ email, name, password, profileImageUrl });
      alert('회원가입이 완료되었습니다.');
    },
    [onSignUp, profileImageUrl]
  );

  const handleProfileImageChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (!file.type.includes('image')) {
        event.preventDefault();
        event.target.value = '';
        throw new Error('이미지 파일만 업로드해주세요');
      }
      fileReader.onload = ({ target }) => {
        setProfileImageUrl(target.result);
      };
      fileReader.readAsDataURL(file);
    },
    [fileReader, setProfileImageUrl, profileImageUrl]
  );

  return (
    <>
      <h1 className="text-center">계정 만들기</h1>
      <form className={formStyle.className} onSubmit={handleSignUp}>
        <input ref={$email} type="email" className="form-control" placeholder="Email" required />
        <input ref={$name} type="text" className="form-control" placeholder="Your Name" required />
        <input
          type="file"
          className="form-control"
          placeholder="Profile"
          accept="image/*"
          onChange={handleProfileImageChange}
        />
        <input ref={$password} type="password" className="form-control" placeholder="Password" minLength="5" required />
        <input
          ref={$repeatPassword}
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
