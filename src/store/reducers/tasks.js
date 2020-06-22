import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const taskAdapter = createEntityAdapter({});

export const globalTasksSelector = taskAdapter.getSelectors(
  (state) => state.task
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: taskAdapter.getInitialState({
    isModalOpen: false,
    currentId: null,
    groupId: null,
  }),
  reducers: {
    /* eslint-disable no-param-reassign */
    addTask: taskAdapter.addOne,
    removeTask: taskAdapter.removeOne,
    editTask: taskAdapter.updateOne,
    openModal: (state, { payload }) => {
      state.isModalOpen = true;
      state.groupId = payload.groupId;
      state.currentId = payload.taskId || null;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.currentId = null;
      state.groupId = null;
    },
    /* eslint-enable no-param-reassign */
  },
});

export default taskSlice;
