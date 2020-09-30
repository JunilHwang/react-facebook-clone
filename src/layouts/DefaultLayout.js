import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';

const DefaultLayout = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header user={user} />
          <Component {...props} user={user} />
        </>
      )}
    />
  );
};

export default DefaultLayout;
