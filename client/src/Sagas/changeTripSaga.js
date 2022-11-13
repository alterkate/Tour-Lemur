/* eslint-disable object-curly-newline */
import axios from 'axios';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { disableLoader, enableLoader } from '../Redux/actions/loaderAction';
import { CHANGE_TRIP, CHANGE_TRIP_SAGA } from '../Redux/types/types';

export function* changeTripWorker(action) {
  const form = action.payload;
  // yield put(enableLoader());
  // yield delay(500);
  console.log('saga', action.payload);
  const response = yield fetch(`/admin/change/${form.id}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(form),
  });
  const result = yield response.status;

  yield put({
    type: CHANGE_TRIP_SAGA,
    payload: result,
  });

  // const res = yield axios.patch(`/admin/change/${id}`, form);
  // yield res.data.headers['Content-Type'];
  // yield put({
  //   type: CHANGE_TRIP_SAGA,
  //   payload: res.data,
  // });
  // yield put(disableLoader());
}

export function* changeTripWatcher() {
  yield takeLatest(CHANGE_TRIP, changeTripWorker);
}
