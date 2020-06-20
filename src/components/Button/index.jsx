/* eslint-disable react/jsx-props-no-spreading */
import { string } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

function Button({ text, color, width, ...props }) {
  return (
    <button
      type="button"
      className={clsx('py-2 px-4', color, width)}
      {...props}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  width: 'w-full',
};

Button.propTypes = {
  text: string.isRequired,
  color: string.isRequired,
  width: string,
};

export default Button;
