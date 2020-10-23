import { createActions } from 'redux-actions';
import { SET_AUTH } from './actionTypes';

export const { setAuth } = createActions(SET_AUTH);
