import React from 'react';
import { Route } from 'react-router';
import Header from '../components/header';
import { useDispatch, useSelector } from 'react-redux';

import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const DefaultLayout = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.users.getUser);
  const logOut = () => {
    dispatch(actions.router.push('/login'));
    dispatch(actions.user.logout());
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Header user={user} onLogout={logOut} />
          <Component {...matchProps} {...rest} />
        </>
      )}
    />
  );
};

export default React.memo(DefaultLayout);
