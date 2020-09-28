import React from 'react';

const SignIn = () => {
  return (
    <>
      <form>
        <input type="email" className="form-control" placeholder="Email" required/>
        <input type="password" className="form-control" placeholder="Password" required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          로그인
        </button>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?
        <a className="text-center new-account" href="signup.html">
          계정 만들기
        </a>
      </p>
    </>
  )
};

export default SignIn;