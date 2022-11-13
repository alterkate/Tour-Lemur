import {
  ADD_TRIPS_ADMIN,
  ADD_ONE_TRIP_ADMIN,
  CHANGE_TRIP,
} from '../types/types';

export const addTripsAdminAction = () => ({
  type: ADD_TRIPS_ADMIN,
});

export const addOneTripAdminAction = (value) => ({
  type: ADD_ONE_TRIP_ADMIN,
  payload: value,
});

export const changeTripAction = (form) => ({
  type: CHANGE_TRIP,
  payload: form,
});
