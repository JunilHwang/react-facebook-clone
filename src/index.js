import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

ReactDOM.render(<App />, document.getElementById('root'));
