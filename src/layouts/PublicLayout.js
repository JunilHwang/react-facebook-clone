import React, { Component } from 'react';
import { Route } from 'react-router-dom';

function PublicLayout(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Component {...matchProps} />
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }

            html,
            body {
              font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
                '돋움', Dotum, sans-serif;
              color: #202b3d;
              background-color: #e9eaed;
              font-size: 12px;
              font-weight: 400;
              line-height: 1.5;
            }

            body {
              padding: 100px 0;
            }
          `}</style>
        </>
      )}
    />
  );
}

export default PublicLayout;
