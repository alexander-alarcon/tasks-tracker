import { func, bool, string } from 'prop-types';
import React, { useState } from 'react';
import clsx from 'clsx';

function RadioButton({ id, bgColor, value, checked, onChange: handleChange }) {
  const [focus, setFocus] = useState(false);

  const boxShadow = [];

  if (checked) {
    boxShadow.push('inset 0 0 0 0.2rem rgba(10,30,30,.1)');
  }

  if (focus) {
    boxShadow.push('0 0 1px 0.2rem rgba(0,0,0,.1)');
  }

  const handleFocus = (ev) => {
    if (ev.type === 'focus') {
      setFocus(true);
    }

    if (ev.type === 'blur') {
      setFocus(false);
    }
  };

  return (
    <label
      className={clsx(
        'w-6 h-6 relative inline-block rounded mx-1 cursor-pointer',
        bgColor
      )}
      htmlFor={id}
      style={{ boxShadow }}
    >
      <input
        id={id}
        className="absolute appearance-none"
        name="color"
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </label>
  );
}

RadioButton.propTypes = {
  id: string.isRequired,
  bgColor: string.isRequired,
  value: string.isRequired,
  checked: bool,
  onChange: func,
};

RadioButton.defaultProps = {
  checked: false,
  onChange() {},
};

export default RadioButton;
