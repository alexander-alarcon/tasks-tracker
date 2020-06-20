import { shape, string, arrayOf } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import Todo, { TodoPropType } from '../Todo';
import Button from '../Button';
import Header from '../Header';

import COLORS from '../../utils/colors';

function TodoList({ group }) {
  const color = COLORS[group.color || 'blue'];

  return (
    <div
      className={clsx(
        'wrapper m-4 border rounded-lg shadow-lg bg-white overflow-y-auto',
        color.border
      )}
    >
      <div
        className={clsx(
          'py-2 px-4 rounded-t-lg',
          color.background,
          color.foreground
        )}
      >
        <Header title="Group List" date={new Date().toDateString()} />
      </div>
      <div>
        <Button text="New item" color={color.button} />
      </div>
      <div className="px-4 overflow-y-auto">
        {group.tasks.map((task) => (
          <Todo key={task.id} data={task} borderColor={color.border} />
        ))}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  group: shape({
    id: string.isRequired,
    title: string.isRequired,
    tasks: arrayOf(TodoPropType.data),
  }).isRequired,
};

export default TodoList;
