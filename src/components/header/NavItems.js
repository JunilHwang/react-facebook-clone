import React from 'react';
import NavItem from './NavItem';
import { resolve } from 'styled-jsx/css';

const linkImageStyle = resolve`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 5px;
`;

const MyComponent = ({ user }) => {
  const { seq, name, profileImageUrl } = user || {};

  return (
    <>
      <ul className="nav">
        {!user ? (
          <>
            <NavItem to="/login">로그인</NavItem>
            <NavItem to="/signup">회원가입</NavItem>
          </>
        ) : (
          <>
            <NavItem to="/login">{name}</NavItem>
            <NavItem to={`/@${seq}`}>
              <img className={linkImageStyle.className} alt="user image" src={profileImageUrl} />
            </NavItem>
            <NavItem to="/logout">로그아웃</NavItem>
          </>
        )}
      </ul>
      {linkImageStyle.styles}
    </>
  );
};

export default MyComponent;
