import React from 'react';
import toggle from '/hocs/toggle';
import { Link } from 'react-router-dom';

const NaviItem = ({ to, text, action }) => {
  const onClickAnchor = (e) => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <li className="nav-item">
      <Link to={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </Link>
    </li>
  );
};

export default toggle(NaviItem);
