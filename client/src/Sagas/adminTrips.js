/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/actions/loaderAction';
import { ADD_TRIPS_ADMIN, ADD_TRIPS_ADMIN_SAGA } from '../Redux/types/types';

export function* tripsAdminWorker(action) {
  // yield put(enableLoader());
  // yield delay(500);
  const res = yield axios.get('/admin');
  yield put({
    type: ADD_TRIPS_ADMIN_SAGA,
    payload: res.data,
  });
  // yield put(disableLoader());
}

export function* tripsAdminWatcher() {
  yield takeLatest(ADD_TRIPS_ADMIN, tripsAdminWorker);
}
