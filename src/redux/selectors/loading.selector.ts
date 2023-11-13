import {RootState} from '../store';

export const getIsLoading = (state: RootState) => state.loading.isLoading;

export const getIsReset = (state: RootState) => state.loading.isReset;
export const getIsLoadingPage = (state: RootState) =>
  state.loading.isLoadingPage;
