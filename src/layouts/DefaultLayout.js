import React from 'react';
import {Route} from "react-router-dom";
import Header from "./Header";

const DefaultLayout = ({ component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <>
        <Header />
        <Component {...props} />
      </>
    )} />
  )
};

export default DefaultLayout;