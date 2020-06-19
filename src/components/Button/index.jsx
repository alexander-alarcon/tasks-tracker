import React from 'react';
import { string } from 'prop-types';

function Button({ text, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className="py-2 px-4 bg-teal-300" {...props}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: string.isRequired,
};

export default Button;
