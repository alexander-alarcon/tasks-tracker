import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const taskAdapter = createEntityAdapter({});

const taksSelector = taskAdapter.getSelectors();

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
  },
  extraReducers: {
    'groups/removeGroup': (state, { payload: groupId }) => {
      const tasks = taksSelector.selectAll(state);

      const keys = tasks
        .filter((task) => task.groupId === groupId)
        .map((task) => task.id);

      taskAdapter.removeMany(state, keys);
    },
  },
});

export default taskSlice;
