import {
  ADD_TRIP,
  ADD_TRIPS_SAGA,
  FIND_TRIPS_BY_SEASON,
  SORT_TRIPS_BY_DATE,
  SORT_TRIPS_BY_PRICE,
} from '../types/types';

const tripsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRIPS_SAGA:
      return payload;
    case ADD_TRIP:
      return [...state.filter((el) => el.id === payload)];
    case SORT_TRIPS_BY_DATE:
      return [...state.sort((a, b) => new Date(a.start) - new Date(b.start))];
    case SORT_TRIPS_BY_PRICE:
      return [...state.sort((a, b) => a.price - b.price)];
    case FIND_TRIPS_BY_SEASON:
      return state.filter((item) => payload.includes(item.Seasone.season));
    default:
      return state;
  }
};

export default tripsReducer;
