import React from 'react';

const SignUp = () => {
  return (
    <>
      <form>
        <input type="email" className="form-control" placeholder="Email" required/>
        <input type="text" className="form-control" placeholder="Your Name" required/>
        <input type="file" className="form-control" placeholder="Profile"/>
        <input type="password" className="form-control" placeholder="Password" min-length="5" required/>
        <input type="password" className="form-control" placeholder="Repeat your password" required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">가입하기</button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?
        <a className="text-center login-here" href="login.html"> 로그인 하기 </a>
      </p>
    </>
  )
};

export default SignUp;