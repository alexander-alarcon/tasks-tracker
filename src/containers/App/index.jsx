import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import groupSlice, { getAllGroups } from '../../store/reducers/group';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import GroupModal from './GroupModal';

function App() {
  const dispatch = useDispatch();
  const groups = useSelector(getAllGroups);

  const handleModalGroupOpen = () => {
    dispatch(groupSlice.actions.openModal());
  };

  return (
    <div className="App bg-gray-200 flex flex-col min-h-screen">
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
          onClick={handleModalGroupOpen}
          color="teal"
          rounded
        />
      </Footer>

      <GroupModal />
    </div>
  );
}

export default App;
