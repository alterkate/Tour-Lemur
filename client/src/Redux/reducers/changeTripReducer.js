import { CHANGE_TRIP_SAGA } from '../types/types';

const changeTripReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_TRIP_SAGA:
      return payload;
    default:
      return state;
  }
};

export default changeTripReducer;
