import React from 'react';

import TodoList from '../TodoList';

function App() {
  return (
    <div className="App bg-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

export default App;
