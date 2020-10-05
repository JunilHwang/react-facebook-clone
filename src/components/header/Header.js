import React from 'react';
import css from 'styled-jsx/css';
import { NavItems } from './nav';

const Header = ({ user }) => {
  return (
    <nav className="navbar fixed-top bg-blue">
      <a href="/" className="navbar-brand">
        <i className="fab fa-facebook-square" aria-hidden="true" />
      </a>
      <NavItems user={user} />
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

  .navbar-brand i.fa-facebook-square {
    font-size: 27px;
    color: white;
  }
`;

export default Header;
