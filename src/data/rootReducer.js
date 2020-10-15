import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import user from './users/reducers';
import posts from './posts/reducers';
import comments from './comments/reducers';

const createRootReducer = (history) =>
  combineReducers({
    comments,
    posts,
    router: connectRouter(history),
    user,
  });

export { createRootReducer };
