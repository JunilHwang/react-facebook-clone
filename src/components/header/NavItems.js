import React from 'react';
import NavItem from './NavItem';
import ProfileImage from './ProfileImage';
import Conditional from '@/hocs/Conditional';

const defaultProfileImageURL = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';

const NavItems = ({ user, onLogout }) => {
  const { seq, name, profileImageUrl = defaultProfileImageURL } = user || {};

  return (
    <ul className="nav">
      <Conditional condition={!user}>
        <NavItem to="/login">로그인</NavItem>
        <NavItem to="/signup">회원가입</NavItem>
      </Conditional>
      <Conditional condition={user}>
        <NavItem to={`/u/${seq}`}>
          <ProfileImage src={profileImageUrl} />
          {name}
        </NavItem>
        <NavItem to="/logout" onClick={onLogout}>
          로그아웃
        </NavItem>
      </Conditional>
    </ul>
  );
};

export default React.memo(NavItems);
