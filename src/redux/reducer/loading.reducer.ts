import {createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types/redux.type';
import {LoadingState} from '../types';

const initialState: LoadingState = {
  isLoading: false,
  isReset: false,
  isLoadingPage: false,
};

const reducer = createSlice({
  name: Redux.loading,
  initialState,
  reducers: {
    showLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    hideLoading: (state: LoadingState) => {
      state.isLoading = false;
    },

    showLoadingPage: (state: LoadingState) => {
      state.isLoadingPage = true;
    },
    hideLoadingPage: (state: LoadingState) => {
      state.isLoadingPage = false;
    },
    showReset: (state: LoadingState) => {
      state.isReset = true;
    },
    hideReset: (state: LoadingState) => {
      state.isReset = false;
    },
  },
});

export const LoadingReducer = reducer.reducer;
export const LoadingActions = reducer.actions;
