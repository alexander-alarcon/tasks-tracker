import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import taskSlice from '../../../store/reducers/tasks';
import Modal from '../../../components/Modal';
import Form from '../../../components/Form';

import {
  getModalIsOpen,
  getModalCurrentId,
  getModalGroupId,
  getModalTask,
  getModalColor,
} from '../../../store/selectors/task';

function TaskModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalIsOpen);
  const currentId = useSelector(getModalCurrentId);
  const groupId = useSelector(getModalGroupId);
  const task = useSelector(getModalTask);
  const color = useSelector(getModalColor);

  const handleClose = () => {
    dispatch(taskSlice.actions.closeModal());
  };

  const handleSubmit = ({ title, detail }) => {
    if (currentId) {
      dispatch(
        taskSlice.actions.editTask({
          id: currentId,
          changes: { title, detail },
        })
      );
    } else {
      dispatch(
        taskSlice.actions.addTask({
          id: nanoid(),
          date: +new Date(),
          completed: false,
          groupId,
          title,
          detail,
        })
      );
    }

    dispatch(taskSlice.actions.closeModal());
  };

  return (
    <Modal
      title={task.title ? 'Edit task' : 'Add task'}
      isOpen={isModalOpen}
      onClose={handleClose}
    >
      <Form
        inputs={{
          title: 'Task Title:',
          detail: 'Detail:',
        }}
        onSubmit={handleSubmit}
        onCancel={handleClose}
        initialValues={{
          ...task,
          color,
        }}
      />
    </Modal>
  );
}

TaskModal.propTypes = {};

export default TaskModal;
