import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <form>
        <input type="email" className="form-control" placeholder="Email" required/>
        <input type="text" className="form-control" placeholder="Your Name" required/>
        <input type="file" className="form-control" placeholder="Profile"/>
        <input type="password" className="form-control" placeholder="Password" minLength="5" required/>
        <input type="password" className="form-control" placeholder="Repeat your password" required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">가입하기</button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?
        <Link className="text-center login-here" to="/login"> 로그인 하기 </Link>
      </p>
    </>
  )
};

export default SignUp;