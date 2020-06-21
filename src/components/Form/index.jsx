import { shape, string, func, bool } from 'prop-types';
import React, { useState } from 'react';

import RadioButton from '../Radio';
import Button from '../Button';

import COLORS from '../../utils/colors';

function Form({ titleConfig, detailConfig, colors, onSubmit, onCancel }) {
  const [inputs, setInputs] = useState({
    title: '',
    detail: '',
    color: 'blue',
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
      <div className="flex flex-col sm:justify-between ">
        <label className="tracking-wide" htmlFor={titleConfig.id}>
          {titleConfig.label}
        </label>
        <input
          className="bg-white border-b border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          type="text"
          id={titleConfig.id}
          name={titleConfig.id}
          onChange={handleChange}
        />
      </div>
      {detailConfig && (
        <div className="flex flex-col sm:justify-between ">
          <label className="tracking-wide" htmlFor={detailConfig.id}>
            {detailConfig.label}
          </label>
          <input
            className="bg-white border-b border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            type="text"
            id={detailConfig.id}
            name={titleConfig.id}
            onChange={handleChange}
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

Form.propTypes = {
  titleConfig: shape({
    id: string.isRequired,
    label: string.isRequired,
  }).isRequired,
  detailConfig: shape({
    id: string.isRequired,
    label: string.isRequired,
  }),
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
  colors: bool,
};

Form.defaultProps = {
  detailConfig: null,
  colors: false,
};

export default Form;
