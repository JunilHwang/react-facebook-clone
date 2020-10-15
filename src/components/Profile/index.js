import React from 'react';
import toggle from '/hocs/toggle';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { profileImageUrl, name } = props.user;
  return (
    <li className="nav-item">
      <Link to={'/u/' + props.user.name} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </Link>
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
