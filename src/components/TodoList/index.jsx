import { shape, string, arrayOf } from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import clsx from 'clsx';

import groupSlice from '../../store/reducers/group';
import Todo, { TodoPropType } from '../Todo';
import Button from '../Button';
import Header from '../Header';

import COLORS from '../../utils/colors';

function TodoList({ group }) {
  const dispatch = useDispatch();
  const color = COLORS[group.color || 'blue'];

  const handleOpenModal = () => {
    dispatch(groupSlice.actions.openModal(group.id));
  };

  const handleRemoveGroup = () => {
    dispatch(groupSlice.actions.removeGroup(group.id));
  };

  return (
    <div
      className={clsx(
        'wrapper m-4 border rounded-lg shadow-lg bg-white overflow-y-auto',
        color.border
      )}
    >
      <div
        className={clsx(
          'py-2 px-4 rounded-t-lg',
          color.background,
          color.foreground
        )}
      >
        <Header
          title={group.title}
          date={group.date}
          onEdit={handleOpenModal}
          onRemove={handleRemoveGroup}
        />
      </div>
      <div className={clsx('border-t', color.border)}>
        <Button text="New item" color={group.color} size="w-full" />
      </div>
      <div className="px-4 overflow-y-auto">
        {group.tasks.map((task) => (
          <Todo key={task.id} data={task} borderColor={color.border} />
        ))}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  group: shape({
    id: string.isRequired,
    title: string.isRequired,
    date: string.isRequired,
    tasks: arrayOf(TodoPropType.data),
  }).isRequired,
};

export default TodoList;
