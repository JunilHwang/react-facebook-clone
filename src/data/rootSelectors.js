import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';

export * from './posts/selectors';
export * from './comments/selectors';
export * from './users/selectors';

export const matchUser = createMatchSelector({ path: '/u/:userId' });
export const selectWriterOfURIParam = createSelector(matchUser, (matched) => {
  console.log('matched', matched, matched?.params?.userId);
  if (matched) return 2;
  return 1;
});
