import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createRootReducer } from './rootReducer';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
export const rootReducer = createRootReducer(history);

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
    )
  );

  return { store, history };
};
