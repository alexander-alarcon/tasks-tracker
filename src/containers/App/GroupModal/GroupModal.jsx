import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import groupSlice, {
  getModalIsOpen,
  getModalCurrentId,
  getModalGroup,
} from '../../../store/reducers/group';
import Modal from '../../../components/Modal';
import Form from '../../../components/Form';
import generateId from '../../../utils/misc';

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
          id: generateId(),
          date: new Date().toDateString(),
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
        title="Group Title:"
        onSubmit={handleSubmit}
        onCancel={handleClose}
        initialValues={group}
        colors
      />
    </Modal>
  );
}

GroupModal.propTypes = {};

export default GroupModal;
