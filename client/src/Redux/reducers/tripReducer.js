import { ADD_TRIP_SAGA } from '../types/types';

const tripsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRIP_SAGA:
      return payload;
    default:
      return state;
  }
};

export default tripsReducer;
