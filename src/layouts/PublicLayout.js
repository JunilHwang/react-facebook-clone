import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { resolve } from 'styled-jsx/css';
import { useDispatch, useSelector } from 'react-redux';

import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const PublicLayout = ({ component: Component, ...rest }) => {
  const user = useSelector(selectors.users.getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user !== null) {
      dispatch(actions.router.push('/'));
    }
  }, [user]);
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="container">
          <Component {...matchProps} {...rest} />
        </div>
      )}
    />
  );
};

export const formStyle = resolve`
  max-width: 320px;
  padding: 8px;
  margin: 0 auto;
`;

export const buttonStyle = resolve`
  background-color: #3b5999;
  color: #fffffe;
  font-weight: 800;
  border-color: unset;
  margin-top: 10px;
`;

export const textHelpStyle = resolve`
  margin-top: 10px;
`;

export const linkStyle = resolve`
  font-weight: 900;
  color: #3a5999;
  margin-left: 4px;
`;

export default PublicLayout;
