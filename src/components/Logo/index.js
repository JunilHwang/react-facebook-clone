import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <Link className="navbar-brand" to="/">
      <i className="fab fa-facebook-square" />

      <style jsx>{`
        :global(.navbar-brand) i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }
      `}</style>
    </Link>
  );
};

export default HomeLink;
