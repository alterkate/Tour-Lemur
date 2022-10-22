import { all } from 'redux-saga/effects';
import { tripsWatcher } from './tripsSaga';

export default function* rootSaga() {
  yield all([tripsWatcher()]);
}
