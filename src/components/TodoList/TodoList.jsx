import { shape, string, arrayOf } from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import clsx from 'clsx';

import groupSlice from '../../store/reducers/group';
import taskSlice from '../../store/reducers/tasks';
import Todo, { TodoPropType } from '../Todo';
import Button from '../Button';
import Header from '../Header';

import COLORS from '../../utils/colors';

function TodoList({ group }) {
  const dispatch = useDispatch();
  const color = COLORS[group.color || 'blue'];

  const handleNewTask = () => {
    dispatch(taskSlice.actions.openModal({ groupId: group.id }));
  };

  const handleEdit = () => {
    dispatch(groupSlice.actions.openModal(group.id));
  };

  const handleRemove = () => {
    dispatch(groupSlice.actions.removeGroup(group.id));
  };

  return (
    <div
      className={clsx(
        'wrapper m-4 border rounded-lg shadow-lg overflow-y-auto',
        color.border,
        color.lightBackground
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
          onEdit={handleEdit}
          onRemove={handleRemove}
          isCompleted={group.progress === 1}
        />
      </div>
      <div className={clsx('border-t', color.border)}>
        <Button
          text="New item"
          color={group.color}
          size="w-full"
          onClick={handleNewTask}
        />
      </div>
      <div
        className="relative h-2"
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
      >
        <progress
          className={clsx(
            'absolute top-0 h-2 w-full transform transition-transform duration-150 ease-in-out appearance-none',
            color.darkBackground
          )}
          style={{
            '--transform-scale-x': group.progress,
          }}
          max="1"
          min="0"
          value={group.progress}
        />
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
