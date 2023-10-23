import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {AuthState} from '../types';

const initialState: AuthState = {
  user: {},
  token: '',
  refreshToken: '',
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    handleLogin: (state: AuthState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    handleLoginSuccess: (
      state: AuthState,
      action: PayloadAction<AuthState>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    Logout: (state: AuthState) => {
      return {
        user: {},
        refreshToken: '',
        token: '',
      };
    },
  },
});

export const AuthReducer = reducer.reducer;
export const AuthActions = reducer.actions;
