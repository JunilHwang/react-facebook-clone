import React from 'react';
import css from 'styled-jsx/css';
import { NavItems, Logo } from './nav';

const Header = (props) => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <NavItems {...props} />
      <style jsx>{HeaderStyle}</style>
    </nav>
  );
};

const HeaderStyle = css`
  nav.fixed-top {
    height: 50px;
  }

  nav.navbar.bg-blue {
    background-color: #3b5999;
  }
`;

export default Header;
