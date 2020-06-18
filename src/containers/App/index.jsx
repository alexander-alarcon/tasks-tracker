import React from 'react';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import TodoList from '../TodoList';

function App() {
  return (
    <div className="App bg-gray-200 flex flex-col min-h-screen">
      <div className="relative flex flex-1 mt-16 sm:mb-16 sm:mt-0">
        <div className="lists__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-auto">
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
      </div>
      <Footer>
        <Button text="New List" />
      </Footer>
    </div>
  );
}

export default App;
