import { createActions } from 'redux-actions';
import {FETCH_AUTH, REMOVE_AUTH} from './actionTypes';

export const { fetchAuth, removeAuth } = createActions(FETCH_AUTH, REMOVE_AUTH);
