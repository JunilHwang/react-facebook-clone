import React from 'react';
import toggle from '../../hocs/toggle';

const Profile = (props) => {
  const { profileImageUrl, name } = props.user;
  return (
    <li className="nav-item">
      <a href={'/u/' + props.user.seq} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </a>
      <style jsx>{`
        .nav-item img {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
      `}</style>
    </li>
  );
};

export default toggle(Profile);
