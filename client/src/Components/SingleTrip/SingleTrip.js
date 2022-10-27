import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import addOneTripAction from '../../Redux/actions/tripAction';

function SingleTrip() {
  const dispatch = useDispatch();
  const { trip } = useSelector((state) => state);
  console.log('this one trip', trip);

  const { id } = useParams();

  useEffect(() => {
    dispatch(addOneTripAction(id));
  }, [id]);

  return trip ? (
    <div>
      <img
        style={{
          width: '200px',
        }}
        alt="trip"
        src={trip?.Photo?.main}
      />
      <h2>{trip.title}</h2>
      <p>{trip.description}</p>
    </div>
  ) : (
    'loading...'
  );
}

export default SingleTrip;
