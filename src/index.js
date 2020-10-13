import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { Provider } from 'react-redux';
import { configureStore } from './data/configureStore';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const { store, history } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
