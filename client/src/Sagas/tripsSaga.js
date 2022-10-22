/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { ADD_TRIPS, ADD_TRIPS_SAGA } from '../Redux/types/types';

export function* tripsWorker() {
  const res = yield axios.get('/trips');
  yield put({
    type: ADD_TRIPS_SAGA,
    payload: res.data,
  });
}

export function* tripsWatcher() {
  yield takeLatest(ADD_TRIPS, tripsWorker);
}
