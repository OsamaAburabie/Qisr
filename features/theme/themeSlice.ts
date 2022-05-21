import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Appearance} from 'react-native';
export type initialState = {
  theme: string;
};

const initialState: initialState = {
  theme: Appearance.getColorScheme() || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme == 'light' ? 'dark' : 'light';
    },
  },
});

export const slelectTheme = (state: RootState) => state.themeReducer.theme;
export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;
