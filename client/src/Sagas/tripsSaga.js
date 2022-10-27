/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/actions/loaderAction';
import { ADD_TRIPS, ADD_TRIPS_SAGA } from '../Redux/types/types';

export function* tripsWorker() {
  yield put(enableLoader());
  yield delay(500);
  const res = yield axios.get('/trips');
  yield put({
    type: ADD_TRIPS_SAGA,
    payload: res.data,
  });
  yield put(disableLoader());
}

export function* tripsWatcher() {
  yield takeLatest(ADD_TRIPS, tripsWorker);
}
