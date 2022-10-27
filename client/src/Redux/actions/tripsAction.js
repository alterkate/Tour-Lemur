import {
  ADD_TRIPS,
  SORT_TRIPS_BY_DATE,
  SORT_TRIPS_BY_PRICE,
  FIND_TRIPS_BY_SEASON,
  ADD_TRIP,
} from '../types/types';

export const addTripsAction = () => ({
  type: ADD_TRIPS,
});

export const addOneTripAction = (id) => ({
  type: ADD_TRIP,
  payload: id,
});

export const sortTripsByDateAction = () => ({
  type: SORT_TRIPS_BY_DATE,
});

export const sortTripsByPriceAction = () => ({
  type: SORT_TRIPS_BY_PRICE,
});

export const findTripsBySeasonAction = (season) => ({
  type: FIND_TRIPS_BY_SEASON,
  payload: season,
});
