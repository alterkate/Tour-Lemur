import React from 'react';

function select({
  options, defaultValue, value, onChange,
}) {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default select;
