import { all } from 'redux-saga/effects';
import { tripOneAdminWatcher } from './adminOneTrip';
import { tripsAdminWatcher } from './adminTrips';
import { changeTripWatcher } from './changeTripSaga';
import { tripWatcher } from './tripSaga';
import { tripsWatcher } from './tripsSaga';

export default function* rootSaga() {
  yield all([
    tripsWatcher(),
    tripWatcher(),
    tripsAdminWatcher(),
    tripOneAdminWatcher(),
    changeTripWatcher(),
  ]);
}
