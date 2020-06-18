import React from 'react';

function Todo() {
  return (
    <div className="relative my-4 last:mb-0 p-4 bg-white border-l-8 border-teal-300 shadow">
      <div className="todo__header flex items-center">
        <div className="flex-1">
          <div className="font-bold">Todo title</div>
          <span className="text-gray-700 text-xs italic">
            {new Date().toUTCString()}
          </span>
        </div>
        <div className="actions flex items-center text-sm">
          <spa className="material-icons cursor-pointer text-gray-600">
            check_box
          </spa>
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
      <div className="todo__content text-sm italic">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit
          aliquid totam dignissimos.
        </p>
      </div>
    </div>
  );
}

export default Todo;
