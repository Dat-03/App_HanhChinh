import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {AuthState, RefreshToken} from '../types';

const initialState: AuthState = {
  user: {},
  token: '',
  refreshToken: '',
  imageUser: '',
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

    refreshToken: (state: AuthState, action: PayloadAction<RefreshToken>) => {
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    },

    setImage: (state: AuthState, action: PayloadAction<string>) => {
      return {
        ...state,
        imageUser: action.payload,
      };
    },

    Logout: (state: AuthState) => {
      return {
        user: {},
        refreshToken: '',
        token: '',
        imageUser: '',
      };
    },
  },
});

export const AuthReducer = reducer.reducer;
export const AuthActions = reducer.actions;
