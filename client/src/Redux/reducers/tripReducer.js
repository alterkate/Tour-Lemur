import { ADD_TRIPS_SAGA } from '../types/types';

const tripReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRIPS_SAGA:
      return payload;
    default:
      return state;
  }
};

export default tripReducer;
