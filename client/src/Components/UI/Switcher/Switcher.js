/* eslint-disable object-curly-newline */
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Switcher({ checked, name, onChange, label }) {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} name={name} />}
      label={label}
    />
  );
}
