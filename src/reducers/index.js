import { combineReducers } from 'redux';
import { animals } from './animals';
import { isLoaded } from './isLoaded';
import { error } from './error';

export const rootReducer = combineReducers({
  animals,
  isLoaded,
  error
})