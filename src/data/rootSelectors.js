import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';

import * as posts from './posts/selectors';
import * as comments from './comments/selectors';
import * as users from './users/selectors';

export { comments, posts, users };

export const matchUser = createMatchSelector({ path: '/u/:userId' });
export const selectWriterOfURIParam = createSelector(matchUser, (matched) => {
  if (!matched) return null;
  return Number(matched.params.userId);
});
