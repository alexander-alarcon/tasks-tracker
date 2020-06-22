/* eslint-disable no-unused-vars */
import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';

import taskSlice, { globalTasksSelector } from './tasks';

const { addTask, removeTask } = taskSlice.actions;

const groupAdapter = createEntityAdapter({});

const groupSelectors = groupAdapter.getSelectors();

const groupSlice = createSlice({
  name: 'groups',
  initialState: groupAdapter.getInitialState({
    isModalOpen: false,
    currentId: null,
  }),
  reducers: {
    /* eslint-disable no-param-reassign */
    addGroup: groupAdapter.addOne,
    removeGroup: groupAdapter.removeOne,
    editGroup: groupAdapter.updateOne,
    openModal: (state, { payload: groupId = null }) => {
      state.isModalOpen = true;
      state.currentId = groupId;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.currentId = null;
    },
    /* eslint-enba no-param-reassign */
  },
  extraReducers: {
    [addTask]: (state, { payload }) => {
      const currentGroup = groupSelectors.selectById(state, payload.groupId);
      const currentTask = currentGroup.tasks || [];

      groupAdapter.updateOne(state, {
        id: payload.groupId,
        changes: { tasks: currentTask.concat(payload.id) },
      });
    },
    [removeTask]: (state, { payload }) => {
      const currentGroup = groupSelectors.selectById(state, payload.groupId);
      const currentTask = currentGroup.tasks || [];

      groupAdapter.updateOne(state, {
        id: payload.groupId,
        changes: {
          tasks: currentTask.filter((id) => id !== payload.id),
        },
      });
    },
  },
});

export default groupSlice;
