import React from 'react';
import css from 'styled-jsx/css';
import Logo from './Logo';
import NavItems from './NavItems';

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

export default React.memo(Header);
