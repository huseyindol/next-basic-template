/**
 *
 * main
 *
 */

import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    error: null,
    auth: null,
  },
  reducers: {
    modifiedData: (state, action) => {
      // console.log('modifiedData:', state, action);
      state[action.payload.name] = action.payload.data;
    },
  },
});

export const { modifiedData, extramodifiedData } = mainSlice.actions;

export const selectMain = (state) => state.main;

export default mainSlice.reducer;
