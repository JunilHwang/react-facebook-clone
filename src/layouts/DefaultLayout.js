import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Header from '../components/header';
import { useAuth } from '@/hooks';

const DefaultLayout = ({ component: Component, ...rest }) => {
  const { fetchAuth } = useAuth();

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Header {...rest} />
          <Component {...matchProps} {...rest} />
        </>
      )}
    />
  );
};

export default React.memo(DefaultLayout);
