import React from 'react';
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="DefaultLayout">
        <div className="Header">Header</div>
        <Component {...props} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  )
};

export default DefaultLayout;