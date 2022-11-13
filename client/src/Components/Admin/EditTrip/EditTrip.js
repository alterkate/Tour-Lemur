/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  addTripsAdminAction,
  addOneTripAdminAction,
  changeTripAction,
} from '../../../Redux/actions/tripsAdminAction';
import Input from '../../UI/Input/Input';
import AutoComplete from '../../UI/AutoComplete/AutoComplete';
import DatePicker from '../../UI/DatePicker/DatePicker';
import Switcher from '../../UI/Switcher/Switcher';

function EditTrip() {
  const dispatch = useDispatch();
  const { adminTrips, adminOneTrip, changeStatus } = useSelector(
    (state) => state,
  );
  // инпут для выбора поездки для редактирования
  const [autocomplete, setAutocomplete] = useState(null);
  // форма, в которую собирается обновленная информация
  const [form, setForm] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [switcher, setSwitcher] = useState(false);

  // загрузка всех trips для отображения в autocomplete
  useEffect(() => {
    if (!adminTrips.length) {
      dispatch(addTripsAdminAction());
    }
  }, []);

  // если
  useEffect(() => {
    // if (adminTrips !== null) {
    setForm(adminOneTrip);
    dispatch(addOneTripAdminAction(autocomplete));

    // }
  }, [adminTrips, autocomplete]);

  const changeAutocomplete = (event, newValue) => {
    setAutocomplete(newValue);
  };

  const changeInputHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
    setForm((prev) => ({
      ...prev,
      start: `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`,
    }));
  };
  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
    setForm((prev) => ({
      ...prev,
      end: `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`,
    }));
  };

  const changeVisibilityAutocomplete = (e) => {
    setSwitcher(!switcher);
    setForm((prev) => ({ ...prev, [e.target.name]: !switcher }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeTripAction(form));
    // setAutocomplete(null);
  };

  console.log('form', form);

  return (
    <>
      <AutoComplete
        onChange={changeAutocomplete}
        value={autocomplete}
        options={adminTrips.map((el) => el.title)}
        label="Путешествия"
      />
      {autocomplete !== null ? (
        <div>
          <Box
            onSubmit={submitHandler}
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '70%' },
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              raw={1}
              name="title"
              label="Название"
              defaultValue={adminOneTrip.title}
              onChange={changeInputHandler}
            />
            <Input
              raw={4}
              name="description"
              label="Описание"
              defaultValue={adminOneTrip.description}
              onChange={changeInputHandler}
            />
            <Input
              raw={1}
              name="price"
              label="Стоимость"
              defaultValue={adminOneTrip.price}
              onChange={changeInputHandler}
            />
            <DatePicker
              value={startDate}
              label="Начало похода"
              onChange={handleStartDateChange}
            />
            <DatePicker
              value={endDate}
              label="Окончание похода"
              onChange={handleEndDateChange}
            />
            <Switcher
              checked={switcher}
              name="visible"
              label="скрыть / показать путешествие пользователям сайта"
              onChange={changeVisibilityAutocomplete}
            />
            <Input
              raw={1}
              name="level"
              label="Уровень сложности"
              defaultValue={adminOneTrip.level}
              onChange={changeInputHandler}
            />
            <Input
              raw={1}
              name="children"
              label="С детьми"
              defaultValue={adminOneTrip.children}
              onChange={changeInputHandler}
            />
            <Input
              raw={1}
              name="direction"
              label="Направление"
              defaultValue={adminOneTrip.direction}
              onChange={changeInputHandler}
            />
            <Input
              raw={1}
              name="duration"
              label="Длительность"
              defaultValue={adminOneTrip.duration}
              onChange={changeInputHandler}
            />
            <Input
              raw={1}
              name="season"
              label="Сезон"
              defaultValue={adminOneTrip.season}
              onChange={changeInputHandler}
            />
            <Button type="submit" onSubmit={submitHandler} variant="contained">
              Contained
            </Button>
          </Box>
        </div>
      ) : (
        <div>ngyfuf</div>
      )}
    </>
  );
}

export default EditTrip;
