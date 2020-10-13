import React from 'react';
import { Route } from 'react-router';
import Header from '../components/header';
import {useAuth} from "../hooks";

const DefaultLayout = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
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
