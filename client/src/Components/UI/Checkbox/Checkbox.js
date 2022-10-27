import React from 'react';

function Checkbox({ variants, onChange }) {
  return (
    <div>
      {variants.map((el, index) => (
        <>
          <input
            key={index}
            value={el}
            type="checkbox"
            // name={el.name}
            onChange={onChange}
          />
          {el}
        </>
      ))}
    </div>
  );
}

export default Checkbox;
