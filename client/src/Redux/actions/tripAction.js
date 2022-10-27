import { ADD_TRIP } from '../types/types';

const addOneTripAction = (id) => ({
  type: ADD_TRIP,
  payload: id,
});

export default addOneTripAction;
