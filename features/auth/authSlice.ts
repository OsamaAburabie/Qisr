import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null} as {
    user: null | any;
    token: null | string;
  },
  reducers: {
    setCredentials: (
      state,
      {payload: {user, token}}: PayloadAction<{user: any; token: string}>,
    ) => {
      state.user = user;
      state.token = token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: builder => {},
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.authReducer.user;
