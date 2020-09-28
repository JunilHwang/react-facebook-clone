import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <a href="/" className="navbar-brand">
        <i className="fab fa-facebook-square" aria-hidden="true" />
      </a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link"> 로그인 </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link"> 회원가입 </Link>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link">
            <img
              alt="user image"
              src="https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png"
            />
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link">로그아웃</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;