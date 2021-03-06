import { shape, string } from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import taskSlice from '../../store/reducers/tasks';
import Header from '../Header';

function Todo({ data, borderColor }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      taskSlice.actions.openModal({ taskId: data.id, groupId: data.groupId })
    );
  };

  const handleRemove = () => {
    dispatch(
      taskSlice.actions.removeTask({ id: data.id, groupId: data.groupId })
    );
  };

  const handleCheck = () => {
    dispatch(
      taskSlice.actions.editTask({
        id: data.id,
        changes: { completed: !data.completed },
      })
    );
  };

  return (
    <div
      className={clsx(
        'my-4 p-4 bg-white border-l-8 border-b rounded-md shadow-sm',
        borderColor
      )}
    >
      <Header
        title={data.title}
        date={data.formattedDate}
        onEdit={handleEdit}
        onRemove={handleRemove}
        onCheck={handleCheck}
        isCompleted={data.completed}
      />
      <div className="todo__content text-sm italic">
        <p>{data.detail}</p>
      </div>
    </div>
  );
}

export const TodoPropType = {
  data: shape({
    id: string.isRequired,
    groupId: string.isRequired,
    title: string.isRequired,
    formattedDate: string.isRequired,
    detail: string.isRequired,
  }).isRequired,
  borderColor: string.isRequired,
};

Todo.propTypes = TodoPropType;

export default Todo;
