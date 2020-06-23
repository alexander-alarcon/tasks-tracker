import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import groupSlice from './group';
import taskSlice from './tasks';

const groupPersistConfig = {
  key: 'group',
  storage,
  blacklist: ['isModalOpen', 'currentId'],
};

const taskPersistConfig = {
  key: 'task',
  storage,
  blacklist: ['isModalOpen', 'currentId', 'groupId'],
};

const rootReducer = combineReducers({
  group: persistReducer(groupPersistConfig, groupSlice.reducer),
  task: persistReducer(taskPersistConfig, taskSlice.reducer),
});

export default rootReducer;
