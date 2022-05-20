import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export type initialState = {
  count: number;
};

const initialState: initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count++;
    },
    decrement: state => {
      state.count--;
    },
  },
});

export const selectCount = (state: RootState) => state.counterReducer.count;
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
