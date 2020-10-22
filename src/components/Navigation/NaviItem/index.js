import React from 'react';
import toggle from '/hocs/toggle';

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
      <a href={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </a>
    </li>
  );
};

export default toggle(NaviItem);
