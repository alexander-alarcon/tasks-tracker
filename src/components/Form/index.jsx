import { shape, string, func } from 'prop-types';
import React, { useState } from 'react';

function Form({ titleConfig, detailConfig, onSubmit, onCancel }) {
  const [inputs, setInputs] = useState({});

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
      <button
        type="button"
        className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
        onClick={handleFormSubmit}
      >
        Confirm
      </button>
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
};

Form.defaultProps = {
  detailConfig: null,
};

export default Form;
