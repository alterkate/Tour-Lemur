import React from 'react';
import TextField from '@mui/material/TextField';

// eslint-disable-next-line object-curly-newline
function Input({ rows, label, defaultValue, onChange, name }) {
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      type="text"
      multiline
      rows={rows}
      // value={value}
      name={name}
      defaultValue={defaultValue}
      // variant="standard"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
    />
  );
}

export default Input;
