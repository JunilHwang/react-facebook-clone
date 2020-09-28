import React from 'react';
import {Route} from "react-router-dom";
import Header from "./Header";

const PublicLayout = ({ component: Component, ...rest}) => {
  return (
    <Route {...rest} render={({ className, title, ...props }) => (
      <>
        <Header />
        <Component {...props} />
      </>
    )} />
  )
};

export default PublicLayout;