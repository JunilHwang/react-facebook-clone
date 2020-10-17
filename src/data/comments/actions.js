import { createActions } from 'redux-actions';
import { ADD_COMMENT } from './actionTypes';

export const { addComment } = createActions(ADD_COMMENT);
