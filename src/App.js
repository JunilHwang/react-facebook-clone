import React from 'react';
import { Redirect, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { Home, SignIn, SignUp, User } from './pages';
import { DefaultLayout, PublicLayout } from './layouts';
import * as actions from '@/data/rootActions';

const App = ({ history }) => {
  const dispatch = useDispatch();
  dispatch(actions.user.reloadUser());
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <PublicLayout path="/login" component={SignIn} />
          <PublicLayout path="/signup" component={SignUp} />
          <DefaultLayout path="/u/:userId" component={User} />
          <DefaultLayout path="/" component={Home} />
          <Redirect path="*" to="/" />
        </Switch>
      </ConnectedRouter>
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
  );
};

export default App;
