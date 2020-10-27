import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );
  sagaMiddleware.run(rootSaga);

  return { store, history };
}
