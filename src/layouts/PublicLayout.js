import React from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = ({ component: Component, className, title, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className={`${className} container`}>
          <h1 className="text-center">{title}</h1>
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default PublicLayout;
