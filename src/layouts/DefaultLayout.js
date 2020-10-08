import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { Route } from 'react-router-dom';

class DefaultLayout extends Component {
  render() {
    const { component: Component, user, logOut, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <>
            <Navigation user={user} onLogout={logOut} />
            <Component {...matchProps} {...rest} />
            <style jsx global>{`
              .container {
                padding: 0;
                margin: 0 auto;
              }
            `}</style>
          </>
        )}
      />
    );
  }
}

export default DefaultLayout;
