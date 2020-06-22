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

export const globalGroupSelectors = groupAdapter.getSelectors(
  (state) => state.group
);

const emptyArray = [];
const emptyObject = {};

export const getGroupEntities = ({ group }) => group.entities;

export const getModalIsOpen = ({ group }) => group.isModalOpen || false;

export const getModalCurrentId = ({ group }) => group.currentId || null;

export const getModalGroup = createSelector(
  getGroupEntities,
  getModalCurrentId,
  (entities, id) => {
    return entities[id] || emptyObject;
  }
);

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
          tasks: currentTask.filter((g) => g.id !== payload.id),
        },
      });
    },
  },
});

export default groupSlice;
