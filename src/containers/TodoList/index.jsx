import React from 'react';

import Button from '../../components/Button';
import Todo from '../../components/Todo';

function TodoList() {
  return (
    <div className="wrapper m-4 border border-teal-400">
      <div className="bg-teal-300">
        <header className="list__header flex items-center w-full py-2 px-4">
          <div className="flex-1">
            <div className="font-bold">Todo title</div>
            <span className="text-gray-700 text-xs italic">
              {new Date().toUTCString()}
            </span>
          </div>

          <div className="actions flex items-center text-sm">
            <span className="material-icons cursor-pointer text-gray-600">
              check_box
            </span>
            <span className="material-icons cursor-pointer text-gray-600">
              check_box_outline_blank
            </span>
            <span className="material-icons cursor-pointer text-gray-600">
              edit
            </span>
            <span className="material-icons cursor-pointer text-gray-600">
              delete
            </span>
          </div>
        </header>
      </div>
      <div className="px-4 max-h-64 overflow-y-auto">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <div className="p-4">
        <Button text="New item" />
      </div>
    </div>
  );
}

export default TodoList;
