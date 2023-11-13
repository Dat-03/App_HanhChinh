import {RootState} from '../store';

export const getIsLoading = (state: RootState) => state.loading.isLoading;

export const getIsReset = (state: RootState) => state.loading.isReset;
