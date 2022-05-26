import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';

type User = {
  first_name: string;
  last_name: string;
};

type UserResponse = {
  success: boolean;
  user: User;
  token: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

type EventResponse = {
  success: boolean;
  data: {
    events: [];
  };
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.67:5000/',
    prepareHeaders: (headers, {getState}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).authReducer.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation({
      query: () => 'protected',
    }),
    events: builder.query<EventResponse, void>({
      query: () => ({
        url: 'api/student/events',
        method: 'GET',
      }),
    }),
  }),
});

export const {useLoginMutation, useProtectedMutation, useEventsQuery} = api;
