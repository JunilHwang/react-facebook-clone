import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  font-weight: 900;
  color: #3a5999;
  margin-left: 5px;
`;

const SignIn = () => {
  return (
    <>
      <h1 className="text-center">로그인</h1>
      <form className="login">
        <input type="email" className="form-control" placeholder="Email" required />
        <input type="password" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          로그인
        </button>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?
        <Link className={`text-center ${className}`} to="/signup">
          계정 만들기
        </Link>
      </p>
      <style jsx>{`
        form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }

        input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
        }

        button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }

        .text-help {
          margin-top: 10px;
        }
      `}</style>
      {styles}
    </>
  );
};

export default SignIn;
