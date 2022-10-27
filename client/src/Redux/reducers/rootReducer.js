import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import tripReducer from './tripReducer';
import tripsReducer from './tripsReducer';

const rootReducer = combineReducers({
  trips: tripsReducer,
  trip: tripReducer,
  loader: loaderReducer,
});

export default rootReducer;
