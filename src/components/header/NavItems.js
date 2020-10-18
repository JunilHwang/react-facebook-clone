import React, { useCallback } from 'react';
import NavItem from './NavItem';
import ProfileImage from './ProfileImage';
import Conditional from '@/hocs/Conditional';
import { useAuth } from '@/hooks';
import { AuthMessage } from '@/constants';

const defaultProfileImageURL = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';

const NavItems = () => {
  const { auth, removeAuth } = useAuth();
  const { seq, name, profileImageURL = defaultProfileImageURL } = auth || {};

  const handleLogoutClick = useCallback(
    (event) => {
      event.preventDefault();
      removeAuth();
      alert(AuthMessage.SIGN_OUT);
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
        <NavItem to={`/u/${seq}`}>
          <ProfileImage src={profileImageURL} />
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
