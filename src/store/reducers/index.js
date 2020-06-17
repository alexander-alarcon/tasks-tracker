import { combineReducers } from '@reduxjs/toolkit';

import helloReducer from './hello';

const rootReducer = combineReducers({
  hello: helloReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
