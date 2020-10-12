import React, { useCallback } from 'react';
import NavItem from './NavItem';
import ProfileImage from './ProfileImage';
import Conditional from '../../hocs/Conditional';

const NavItems = ({ user, onRemoveAuth }) => {
  const { seq, name, profileImageUrl } = user || {};

  const handleLogoutClick = useCallback(
    (event) => {
      event.preventDefault();
      onRemoveAuth();
      alert('로그아웃 되었습니다.');
    },
    [onRemoveAuth]
  );

  return (
    <ul className="nav">
      <Conditional condition={!user}>
        <NavItem to="/login">로그인</NavItem>
        <NavItem to="/signup">회원가입</NavItem>
      </Conditional>
      <Conditional condition={user}>
        <NavItem to={`/user/${seq}`}>
          <ProfileImage src={profileImageUrl} />
          {name}
        </NavItem>
        <NavItem to="/logout" onClick={handleLogoutClick}>
          로그아웃
        </NavItem>
      </Conditional>
    </ul>
  );
};

export default NavItems;
