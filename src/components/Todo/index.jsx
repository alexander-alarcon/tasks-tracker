import { shape, string } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import Header from '../Header';

function Todo({ data, borderColor }) {
  return (
    <div
      className={clsx(
        'my-4 p-4 bg-white border-l-8 border-b rounded-md shadow-sm',
        borderColor
      )}
    >
      <Header title={data.title} date={data.date} />
      <div className="todo__content text-sm italic">
        <p>{data.detail}</p>
      </div>
    </div>
  );
}

export const TodoPropType = {
  data: shape({
    title: string.isRequired,
    date: string.isRequired,
    detail: string.isRequired,
  }).isRequired,
  borderColor: string.isRequired,
};

Todo.propTypes = TodoPropType;
export default Todo;
