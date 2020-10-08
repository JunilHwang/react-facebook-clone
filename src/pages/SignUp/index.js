import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup container">
      <h1 className="text-center">계정 만들기</h1>
      <form>
        <input type="email" className="form-control" placeholder="Email" required />
        <input type="text" className="form-control" placeholder="Your Name" required />
        <input type="file" className="form-control" placeholder="Profile" />
        <input type="password" className="form-control" placeholder="Password" minLength="5" required />
        <input type="password" className="form-control" placeholder="Repeat your password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          가입하기
        </button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>
      <style jsx global>{`
        .signup form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .signup input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
          margin-bottom: 1rem;
        }
        .signup button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .signup .text-help {
          margin-top: 10px;
        }
        .signup .login-here {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
