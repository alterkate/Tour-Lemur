import {
  ADD_ONE_TRIP_ADMIN, ADD_ONE_TRIP_ADMIN_SAGA,
} from '../types/types';

const tripOneAdminReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ONE_TRIP_ADMIN_SAGA:
      return payload;
    default:
      return state;
  }
};

export default tripOneAdminReducer;
