import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import { createRootReducer } from './rootReducer';

export const history = createBrowserHistory();

export const configureStore = () => {
  const store = createStore(createRootReducer(history), compose(applyMiddleware(routerMiddleware(history), thunk)));

  return { store, history };
};