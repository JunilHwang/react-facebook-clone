import React from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = ({ component: Component, className, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div className="container">
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default PublicLayout;
