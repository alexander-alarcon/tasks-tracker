/* eslint-disable no-unused-vars */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import taskSlice, { globalTasksSelector } from './tasks';

const { addTask, removeTask } = taskSlice.actions;

const groupAdapter = createEntityAdapter({});

const groupSelectors = groupAdapter.getSelectors();

export const globalGroupSelectors = groupAdapter.getSelectors(
  (state) => state.group
);

const emptyArray = [];

export const getAllGroups = (state) => {
  const groups = globalGroupSelectors.selectAll(state);

  return groups.map((group) => {
    const tasks = group.tasks || [];
    return {
      ...group,
      tasks: tasks.map((id) => globalTasksSelector.selectById(state, id)),
    };
  });
};

const groupSlice = createSlice({
  name: 'groups',
  initialState: groupAdapter.getInitialState(),
  reducers: {
    addGroup: groupAdapter.addOne,
    removeGroup: groupAdapter.removeOne,
    editGroup: groupAdapter.updateOne,
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
          tasks: currentTask.filter((g) => g.id !== payload.id),
        },
      });
    },
  },
});

export default groupSlice;
