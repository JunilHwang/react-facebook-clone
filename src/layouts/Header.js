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
      <style jsx>{`
      
        nav.fixed-top {
          height: 50px;
        }
        nav.navbar.bg-blue {
          background-color: #3b5999;
        }
        
        .nav .nav-item .nav-link {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        
        .nav .nav-item .nav-link:hover {
          color: rgba(255, 255, 255, 0.75);
        }
        
        .navbar-brand i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }
        
        .nav-link > img {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
        
      `}</style>
    </nav>
  );
}

export default Header;