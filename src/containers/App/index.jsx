import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import groupSlice, { getAllGroups } from '../../store/reducers/group';
import taskSlice from '../../store/reducers/tasks';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import TodoList from '../TodoList';

function App() {
  const dispatch = useDispatch();
  const groups = useSelector(getAllGroups);

  const handleAddGroup = () => {
    dispatch(
      groupSlice.actions.addGroup({
        id: '1',
        title: 'group 1',
      })
    );
  };

  const handleAddTask = () => {
    dispatch(
      taskSlice.actions.addTask({
        id: Date.now(),
        groupId: 1,
        title: 'todo 1',
        detail: 'lorem ipsum dolor sit amet',
        date: new Date().toDateString(),
      })
    );
  };

  return (
    <div className="App bg-gray-200 flex flex-col min-h-screen">
      <div className="relative flex flex-1 mt-16 sm:mb-16 sm:mt-0">
        <div className="lists__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-auto">
          {groups.map((group) => (
            <TodoList key={group.id} group={group} />
          ))}
        </div>
      </div>
      <Footer>
        <Button text="New List" onClick={handleAddGroup} />
        <Button text="New Task" onClick={handleAddTask} />
      </Footer>
    </div>
  );
}

export default App;
