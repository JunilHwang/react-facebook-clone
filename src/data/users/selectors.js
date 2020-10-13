import { createSelector } from 'reselect';

export const getAuth = (state) =>
  createSelector(
    (state) => state.users,
    (users) => users.auth
  );
