/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AutoComplete(
  {
    value, onChange, options, label,
  },
) {
  return (
    <Autocomplete
      disablePortal
      value={value}
      onChange={onChange}
      // id="combo-box-demo"
      options={options}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default AutoComplete;
