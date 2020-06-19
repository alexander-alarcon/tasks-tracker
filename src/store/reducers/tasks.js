import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const taskAdapter = createEntityAdapter({});

export const globalTasksSelector = taskAdapter.getSelectors(
  (state) => state.task
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: taskAdapter.getInitialState(),
  reducers: {
    addTask: taskAdapter.addOne,
    removeTask: taskAdapter.removeOne,
    editTask: taskAdapter.updateOne,
  },
});

export default taskSlice;
