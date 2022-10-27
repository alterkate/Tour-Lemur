/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/actions/loaderAction';
import { ADD_TRIP, ADD_TRIP_SAGA } from '../Redux/types/types';

export function* tripWorker(action) {
  // yield put(enableLoader());
  // yield delay(500);
  console.log('payload', action.payload);
  const res = yield axios.get(`/trips/${action.payload}`);

  console.log('saga', res);
  yield put({
    type: ADD_TRIP_SAGA,
    payload: res.data,
  });
  // yield put(disableLoader());
}

export function* tripWatcher() {
  yield takeLatest(ADD_TRIP, tripWorker);
}
