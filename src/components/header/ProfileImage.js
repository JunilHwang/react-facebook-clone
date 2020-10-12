import React from 'react';
import css from 'styled-jsx/css';

const ProfileImage = ({ src }) => {
  return (
    <>
      <img alt="user image" src={src} />
      <style jsx>{profileImageStyle}</style>
    </>
  );
};

const profileImageStyle = css`
  img {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 5px;
  }
`;

export default ProfileImage;
