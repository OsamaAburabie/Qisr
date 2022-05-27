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
    updateEvent: (state, action) => {
      const {id, joining} = action.payload;
      const event = state.events.find((e: any) => e.id === id) as any;

      if (event) {
        event.joining = joining;
      }
    },
  },
});

export const selectEvents = (state: RootState) => state.dataReducer.events;
export const {setEvents, updateEvent} = dataSlice.actions;

export default dataSlice.reducer;
