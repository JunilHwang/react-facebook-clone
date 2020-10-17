import React, { useCallback } from 'react';
import NavItem from './NavItem';
import ProfileImage from './ProfileImage';
import Conditional from '@/hocs/Conditional';
import { useAuth } from '@/hooks';

const NavItems = () => {
  const { auth, removeAuth } = useAuth();
  const { seq, name, profileImageUrl } = auth || {};

  const handleLogoutClick = useCallback(
    (event) => {
      event.preventDefault();
      removeAuth();
      alert('로그아웃 되었습니다.');
    },
    [removeAuth]
  );

  return (
    <ul className="nav">
      <Conditional condition={!auth}>
        <NavItem to="/login">로그인</NavItem>
        <NavItem to="/signup">회원가입</NavItem>
      </Conditional>
      <Conditional condition={auth}>
        <NavItem to={`/?writer=${seq}`}>
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

export default React.memo(NavItems);
