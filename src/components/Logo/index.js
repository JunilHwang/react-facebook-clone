import React from 'react';

const HomeLink = () => {
  return (
    <a className="navbar-brand" href="/">
      <i className="fab fa-facebook-square" />

      <style jsx>{`
        .navbar-brand i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }
      `}</style>
    </a>
  );
};

export default HomeLink;
