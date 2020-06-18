import React from 'react';
import Header from '../Header';

function Todo() {
  return (
    <div className="relative my-4 last:mb-0 p-4 bg-white border-l-8 border-teal-300 shadow">
      <Header title="Todo title" date={new Date().toDateString()} />
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
