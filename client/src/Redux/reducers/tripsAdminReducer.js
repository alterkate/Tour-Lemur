import {
  ADD_TRIPS_ADMIN_SAGA,
} from '../types/types';

const tripsAdminReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRIPS_ADMIN_SAGA:
      return payload;
    default:
      return state;
  }
};

export default tripsAdminReducer;
