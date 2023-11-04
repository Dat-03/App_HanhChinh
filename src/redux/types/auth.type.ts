import {_id} from '../../types';

export type AppStatus = {
  isReady: boolean;
};

export type RefreshToken = {
  token: string;
  refreshToken: string;
};

export type AuthState = {
  user: Partial<User>;
  token: string;
  refreshToken: string;
  imageUser: string;
};

export type User = _id & {
  email: string;
  role: Role;
  name: string;
  phone: string;
};

export type Role = _id & {
  name: string;
};
