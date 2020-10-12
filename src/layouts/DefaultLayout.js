import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components';

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
