import { string, func, bool, shape } from 'prop-types';
import React, { useState } from 'react';

import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button';

import COLORS from '../../utils/colors';

function Form({
  inputs: { title, detail, colors },
  initialValues,
  onSubmit,
  onCancel,
}) {
  const [inputs, setInputs] = useState({
    title: initialValues.title || '',
    detail: initialValues.detail || '',
    color: initialValues.color || 'blue',
  });

  const handleChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (
      (inputs.title && inputs.title.trim().length > 0) ||
      (inputs.detail && inputs.detail.trim().length > 0)
    ) {
      onSubmit(inputs);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {title && (
        <div className="flex flex-col sm:justify-between ">
          <label className="tracking-wide" htmlFor="title">
            {title}
          </label>
          <input
            className="bg-white border-b border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={inputs.title}
          />
        </div>
      )}

      {detail && (
        <div className="flex flex-col sm:justify-between ">
          <label className="tracking-wide" htmlFor="detail">
            {detail}
          </label>
          <input
            className="bg-white border-b border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            type="text"
            id="detail"
            name="detail"
            onChange={handleChange}
            value={inputs.detail}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center">
        {colors && (
          <div className="mb-4 sm:mb-0">
            {Object.keys(COLORS).map((color) => {
              return (
                <RadioButton
                  key={color}
                  id={`radio-${color}`}
                  bgColor={COLORS[color].background}
                  value={color}
                  checked={inputs.color === color}
                  onChange={handleChange}
                />
              );
            })}
          </div>
        )}
        <div>
          <Button
            text="Cancel"
            color={inputs.color}
            onClick={onCancel}
            variant="secondary"
            rounded
          />
          <Button
            type="submit"
            text="Confirm"
            color={inputs.color}
            onClick={handleFormSubmit}
            rounded
          />
        </div>
      </div>
    </form>
  );
}

Form.defaultProps = {
  initialValues: {},
};

Form.propTypes = {
  inputs: shape({
    title: string,
    detail: string,
    colors: bool,
  }).isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
  initialValues: shape({}),
};

export default Form;
