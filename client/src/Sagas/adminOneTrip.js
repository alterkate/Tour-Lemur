/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/actions/loaderAction';
import { ADD_ONE_TRIP_ADMIN, ADD_ONE_TRIP_ADMIN_SAGA } from '../Redux/types/types';

export function* tripOneAdminWorker(action) {
  // yield put(enableLoader());
  // yield delay(500);
  const res = yield axios.get('/admin/getone', {
    params: {
      value: action.payload,
    },
  });
  yield put({
    type: ADD_ONE_TRIP_ADMIN_SAGA,
    payload: res.data,
  });
  // yield put(disableLoader());
}

export function* tripOneAdminWatcher() {
  yield takeLatest(ADD_ONE_TRIP_ADMIN, tripOneAdminWorker);
}
