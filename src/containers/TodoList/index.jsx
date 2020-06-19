/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Todo from '../../components/Todo';

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

export default TodoList;
