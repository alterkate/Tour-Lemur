import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addTripsAction from '../../Redux/actions/tripsAction';
import './trips.css';

function Cards() {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state);
  useEffect(() => {
    // при переходе на другие страницы и обратно трипс не добавляются заново
    if (!trips.length) {
      dispatch(addTripsAction());
    }
  }, []);

  return (
    <div>
      <div className="card_layout">
        {trips.map((el) => (
          <p key={el.id}>{el.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Cards;
