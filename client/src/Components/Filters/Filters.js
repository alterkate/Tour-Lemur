/* eslint-disable object-curly-newline */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  sortTripsByDateAction,
  sortTripsByPriceAction,
} from '../../Redux/actions/tripsAction';
import Checkbox from '../UI/Checkbox/Checkbox';
import Select from '../UI/Select/Select';

function Filters({ checked, setChecked, sorted, setSorted }) {
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state);

  // SELECT
  const [selectedSort, setSelectedSort] = useState('');

  // функция SELECT
  const sortTrips = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
    if (sort === 'Ближайшее событие') {
      if (sorted.length) {
        setSorted([
          ...sorted.sort((a, b) => new Date(a.start) - new Date(b.start)),
        ]);
      } else {
        dispatch(sortTripsByDateAction());
      }
    } else if (sort === 'По цене') {
      if (sorted.length) {
        setSorted([...sorted.sort((a, b) => a.price - b.price)]);
      } else {
        dispatch(sortTripsByPriceAction());
      }
    }
  };

  const checkListSeasones = ['осень', 'зима', 'весна', 'лето'];

  // Add/Remove checked item from array
  const handleCheck = (event) => {
    let updatedList = [...checked];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      setSorted(
        trips.filter((item) => updatedList.includes(item.season)),
      );
      console.log('добавление', updatedList);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      setSorted(
        trips.filter((item) => updatedList.includes(item.season)),
      );
    }
    setChecked(updatedList);
  };

  return (
    <div>
      <h3>СЕЗОН</h3>
      <Checkbox onChange={handleCheck} variants={checkListSeasones} />
      <p>_______________________</p>
      <Select
        value={selectedSort}
        onChange={sortTrips}
        defaultValue="Сортировать"
        options={
          sorted.length
            ? [
                { value: sorted.start, name: 'Ближайшее событие' },
                { value: sorted.price, name: 'По цене' },
              ]
            : [
                { value: trips.start, name: 'Ближайшее событие' },
                { value: trips.price, name: 'По цене' },
              ]
        }
      />
    </div>
  );
}

export default Filters;
