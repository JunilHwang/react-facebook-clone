import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';

import { createRootReducer } from './rootReducer';

export const history = createBrowserHistory();

export const rootReducer = createRootReducer(history);

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(routerMiddleware(history))));

  return { store, history };
};
