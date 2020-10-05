import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../components';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header {...rest} />
          <Component {...props} {...rest} />
        </>
      )}
    />
  );
};

export default DefaultLayout;
