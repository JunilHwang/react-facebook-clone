import React from 'react';
import {Route} from "react-router-dom";

const PublicLayout = ({ component: Component, ...rest}) => {
  return (
    <Route {...rest} render={({ className, title, ...props }) => (
      <div className={`${className} container`}>
        <h1 className="text-center">{title}</h1>
        <Component {...props} />
      </div>
    )} />
  )
};

export default PublicLayout;