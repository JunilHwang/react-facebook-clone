import React from 'react';
import Logo from '/components/Logo';
import Profile from '/components/Profile';
import NaviItem from './NaviItem';

const Navigation = ({ user, onLogout }) => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <ul className="nav">
        <NaviItem to="/login" text="로그인" show={!user} />
        <NaviItem to="/signup" text="회원가입" show={!user} />
        <Profile show={user} user={user} />
        <NaviItem to="/signout" action={onLogout} text="로그아웃" show={user} />
      </ul>

      <style jsx>{`
        .fixed-top {
          height: 50px;
        }
        .bg-blue {
          background-color: #3b5999;
        }
        /* ".nav" 임이의 prefix가 추가되지만 ".nav-item .nav-link"은 추가되지 않습니다. 
          자식 컴포넌트에 스타일을 적용할 수 있습니다. */
        .nav :global(.nav-item .nav-link) {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        .nav :global(.nav-item .nav-link:hover) {
          color: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
