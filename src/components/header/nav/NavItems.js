import React from 'react';
import NavItem from './NavItem';
import ProfileImage from './ProfileImage';

const MyComponent = ({ user }) => {
  const { seq, profileImageUrl } = user || {};

  return (
    <ul className="nav">
      {!user ? (
        <>
          <NavItem to="/login">로그인</NavItem>
          <NavItem to="/signup">회원가입</NavItem>
        </>
      ) : (
        <>
          <NavItem to={`/@${seq}`}>
            <ProfileImage src={profileImageUrl} />
          </NavItem>
          <NavItem to="/logout">로그아웃</NavItem>
        </>
      )}
    </ul>
  );
};

export default MyComponent;
