import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postsReducer from './posts/reducers';
import commentsReducer from './comments/reducers';
import usersReducer from './users/reducers';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  });
