import {RootState} from '../store';

export const getAuthUser = (state: RootState) => state.auth.user;
export const getAuthIdUser = (state: RootState) => state.auth.user._id;
export const getAuthRoleUser = (state: RootState) => state.auth.user.role?.name;
export const getAuthToken = (state: RootState) => state.auth.token;
export const getAuthRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
