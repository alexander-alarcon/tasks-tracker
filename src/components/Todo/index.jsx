import React from 'react';
import { shape, string } from 'prop-types';

import Header from '../Header';

function Todo({ data }) {
  return (
    <div className="relative my-4 last:mb-0 p-4 bg-white border-l-8 border-teal-300 shadow">
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
};

Todo.propTypes = TodoPropType;
export default Todo;
