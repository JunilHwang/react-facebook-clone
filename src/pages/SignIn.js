import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
      <form>
        <input type="email" className="form-control" placeholder="Email" required />
        <input type="password" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          로그인
        </button>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?
        <Link className="text-center new-account" to="/signup">
          계정 만들기
        </Link>
      </p>
    </>
  );
};

export default SignIn;
