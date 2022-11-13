import { combineReducers } from 'redux';
import changeTripReducer from './changeTripReducer';
import loaderReducer from './loaderReducer';
import tripOneAdminReducer from './tripOneAdminReducer';
import tripReducer from './tripReducer';
import tripsAdminReducer from './tripsAdminReducer';
import tripsReducer from './tripsReducer';

const rootReducer = combineReducers({
  trips: tripsReducer,
  trip: tripReducer,
  loader: loaderReducer,
  adminTrips: tripsAdminReducer,
  adminOneTrip: tripOneAdminReducer,
  changeStatus: changeTripReducer,
});

export default rootReducer;
