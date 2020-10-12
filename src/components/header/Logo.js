import React from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <i className="fab fa-facebook-square" aria-hidden="true" />
      </Link>
      <style jsx>{logoStyle}</style>
    </>
  );
};

const logoStyle = css`
  i.fa-facebook-square {
    font-size: 27px;
    color: white;
  }
`;

export default Logo;
