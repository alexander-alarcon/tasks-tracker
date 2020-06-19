import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import { loadState, saveState } from '../utils/localStorage';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadState(),
});

store.subscribe(() => {
  const { group, task } = store.getState();

  saveState({ group, task });
});

export default store;
