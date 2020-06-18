/* eslint-disable react/prop-types */
import React from 'react';

function Button({ text }) {
  return (
    <button type="button" className="py-2 px-4 bg-teal-300">
      {text}
    </button>
  );
}

export default Button;
