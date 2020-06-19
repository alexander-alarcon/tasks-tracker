import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import Todo, { TodoPropType } from '../../components/Todo';
import Button from '../../components/Button';
import Header from '../../components/Header';

function TodoList({ group }) {
  return (
    <div className="wrapper m-4 border border-teal-400">
      <div className="bg-teal-300 py-2 px-4">
        <Header title="Group List" date={new Date().toDateString()} />
      </div>
      <div className="px-4 max-h-64 overflow-y-auto">
        {group.tasks.map((task) => (
          <Todo key={task.id} data={task} />
        ))}
      </div>
      <div className="p-4">
        <Button text="New item" />
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
