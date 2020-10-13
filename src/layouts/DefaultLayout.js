import React from 'react';
import { Route } from 'react-router';
import Header from '../components/header';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Header {...rest} />
          <Component {...matchProps} {...rest} />
        </>
      )}
    />
  );
};

export default DefaultLayout;
