import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import Modal from '../../../components/Modal';
import Form from '../../../components/Form';

import groupSlice from '../../../store/reducers/group';

import {
  getModalIsOpen,
  getModalCurrentId,
  getModalGroup,
} from '../../../store/selectors/group';

function GroupModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getModalIsOpen);
  const currentId = useSelector(getModalCurrentId);
  const group = useSelector(getModalGroup);

  const handleClose = () => {
    dispatch(groupSlice.actions.closeModal());
  };

  const handleSubmit = ({ title, color }) => {
    if (currentId) {
      dispatch(
        groupSlice.actions.editGroup({
          id: currentId,
          changes: { title, color },
        })
      );
    } else {
      dispatch(
        groupSlice.actions.addGroup({
          id: nanoid(),
          date: +new Date(),
          title,
          color,
        })
      );
    }

    dispatch(groupSlice.actions.closeModal());
  };

  return (
    <Modal
      title={group.title ? 'Edit Group' : 'Add Group'}
      isOpen={isModalOpen}
      onClose={handleClose}
    >
      <Form
        inputs={{
          title: 'Group Title:',
          colors: true,
        }}
        onSubmit={handleSubmit}
        onCancel={handleClose}
        initialValues={group}
      />
    </Modal>
  );
}

GroupModal.propTypes = {};

export default GroupModal;
