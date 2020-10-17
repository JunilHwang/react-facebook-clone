import { createSelector } from 'reselect';

export * from './posts/selectors';
export * from './comments/selectors';
export * from './users/selectors';

export const selectRouter = (state) => state.router;
export const selectWriterOfQuery = createSelector(
  selectRouter,
  ({ location: { query } }) => query.writer !== undefined
);
