import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

const linkStyle = css.resolve`
  color: white;
  font-weight: 800;
  font-size: 12px;
  cursor: pointer;
  line-height: 26px;

  a:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const NavItem = ({ children, ...props }) => {
  return (
    <>
      <li className="nav-item">
        <Link className={`nav-link ${linkStyle.className}`} {...props}>
          {children}
        </Link>
      </li>
      {linkStyle.styles}
    </>
  );
};

export default React.memo(NavItem);
