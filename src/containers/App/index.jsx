import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllGroups } from '../../store/reducers/group';
import taskSlice from '../../store/reducers/tasks';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import COLORS from '../../utils/colors';
import Modal from '../../components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const groups = useSelector(getAllGroups);

  /* const handleAddGroup = () => {
    dispatch(
      groupSlice.actions.addGroup({
        id: '1',
        title: 'group 1',
        color: Object.keys(COLORS)[
          Math.floor(Math.random() * Object.keys(COLORS).length)
        ],
      })
    );
  }; */

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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App bg-gray-200 flex flex-col min-h-screen">
      <Modal
        title="Add Group"
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalClose}
      >
        <p>lorem</p>
      </Modal>

      <div className="container relative mt-16 mx-auto sm:mb-16 sm:mt-0">
        <div className="lists__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-max-content overflow-auto">
          {groups.map((group) => (
            <TodoList key={group.id} group={group} />
          ))}
        </div>
      </div>
      <Footer>
        <Button
          text="New List"
          onClick={handleModalOpen}
          color={COLORS.teal.button}
          width="w-32"
        />
        <Button
          text="New Task"
          onClick={handleAddTask}
          color={COLORS.red.button}
          width="w-32"
        />
      </Footer>
    </div>
  );
}

export default App;
