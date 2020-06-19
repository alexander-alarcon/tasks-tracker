import { combineReducers } from '@reduxjs/toolkit';

import helloReducer from './hello';
import groupSlice from './group';
import taskSlice from './tasks';

const rootReducer = combineReducers({
  hello: helloReducer,
  group: groupSlice.reducer,
  task: taskSlice.reducer,
  pepe: {},
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
