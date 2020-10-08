import React, { Component } from "react";
import { Route } from "react-router-dom";

class PublicLayout extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <>
            <Component {...matchProps} />
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

export default PublicLayout;
