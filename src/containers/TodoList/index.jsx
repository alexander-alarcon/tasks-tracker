import React from 'react';

import Todo from '../../components/Todo';

function TodoList() {
  return (
    <div className="wrapper m-4 border border-teal-400">
      <header className="list__header py-2 px-4 bg-teal-300">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-xs italic">
            {new Date().toUTCString()}
          </span>
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
        </div>
        <span className="font-bold">Todo title</span>
      </header>
      <div className="px-4 max-h-64 overflow-y-auto">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <footer className="p-4">
        <button type="button" className="py-2 px-4 bg-teal-300">
          Add New
        </button>
      </footer>
    </div>
  );
}

export default TodoList;
