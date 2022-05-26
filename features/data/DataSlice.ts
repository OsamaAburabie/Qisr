import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export type initialState = {
  events: [];
};

const initialState: initialState = {
  events: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const selectEvents = (state: RootState) => state.dataReducer.events;
export const {setEvents} = dataSlice.actions;

export default dataSlice.reducer;
