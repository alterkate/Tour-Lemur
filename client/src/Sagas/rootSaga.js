import { all } from 'redux-saga/effects';
import { tripWatcher } from './tripSaga';
import { tripsWatcher } from './tripsSaga';

export default function* rootSaga() {
  yield all([tripsWatcher(), tripWatcher()]);
}
