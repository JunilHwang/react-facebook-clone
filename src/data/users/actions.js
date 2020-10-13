import { createActions } from 'redux-actions';
import { FETCH_AUTH } from './actionTypes';

export const { fetchAuth } = createActions({
  [FETCH_AUTH]: (payload) => payload,
});
