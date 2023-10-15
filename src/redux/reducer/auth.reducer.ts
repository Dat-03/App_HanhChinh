import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState, LoginPayload, RefreshToken, User} from '../types';
import {Redux} from '../types/redux.type';
import {UpdateProfileDto} from '../dto';

const initialState: AuthState = {
  enableSignIn: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    //login google
    handleLoginGoogle: (
      state: AuthState,
      _: PayloadAction<Pick<LoginPayload, 'device_token'>>,
    ) => {
      return {
        ...state,
      };
    },

    //logout
    handleLogout: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: false,
        accessToken: '',
        refreshToken: '',
        enableBiometric: false,
        user: {},
        isGoogle: false,
      };
    },

    //get user info
    getUserInfo: (state: AuthState) => {
      return {
        ...state,
      };
    },
    getUserInfoSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getUserInfoFailed: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    refreshToken: (state: AuthState, action: PayloadAction<RefreshToken>) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
  },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
