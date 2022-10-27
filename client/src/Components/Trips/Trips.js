import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTripsAction } from '../../Redux/actions/tripsAction';
import Filters from '../Filters/Filters';
import Loader from '../UI/Loader/Loader';
import './trips.css';

function Cards() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { trips, loader } = useSelector((state) => state);
  // State with list of all checked item
  const [checked, setChecked] = useState([]);

  // sorted copy of trips state
  const [sorted, setSorted] = useState([...trips]);

  useEffect(() => {
    if (!trips.length) {
      dispatch(addTripsAction());
    }
  }, []);
  // }, [checked.length]);

  console.log('trips', trips);

  return !loader ? (
    <div>
      <Filters
        sorted={sorted}
        setSorted={setSorted}
        checked={checked}
        setChecked={setChecked}
      />
      <div>
        {sorted.length
          ? sorted.map((el) => (
            <div key={el.id + el.title} onClick={() => navigate(`/trips/${el.id}`)}>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p>{` c ${el.start} по ${el.end}`}</p>
              <p>{el.price}</p>
            </div>
          ))
          : trips.map((el) => (
            <div key={el.id + el.title} onClick={() => navigate(`/trips/${el.id}`)}>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p>{` c ${el.start} по ${el.end}`}</p>
              <p>{el.price}</p>
            </div>
          ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Cards;
