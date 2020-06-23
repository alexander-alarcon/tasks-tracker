/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { string, oneOf, bool } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import COLORS from '../../utils/colors';

function Button({ text, color, rounded, size, variant, type, ...props }) {
  const uiColor = COLORS[color];
  return (
    <button
      type={type}
      className={clsx('py-2 px-4', uiColor.button[variant], {
        'rounded-lg': rounded,
        'w-full': size === 'w-full',
      })}
      {...props}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
  rounded: false,
  size: 'w-auto',
};

Button.propTypes = {
  text: string.isRequired,
  color: string.isRequired,
  rounded: bool,
  size: oneOf(['w-full', 'w-auto']),
  variant: oneOf(['primary', 'secondary']),
  type: oneOf(['button', 'reset', 'submit']),
};

export default Button;
