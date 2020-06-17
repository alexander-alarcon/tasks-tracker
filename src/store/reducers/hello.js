import { createReducer, createAction } from '@reduxjs/toolkit';

export const changeName = createAction('CHANGE_NAME');

const helloReducer = createReducer(
  { name: '' },
  {
    [changeName]: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  }
);

export default helloReducer;
