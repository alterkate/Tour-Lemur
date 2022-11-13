import React from 'react';
import './Button.css';

function Button({ changeHandler, text }) {
  return (
    <div>
      <button className="common_button" type="button" onClick={changeHandler}>
        {text}
      </button>
    </div>
  );
}

export default Button;
