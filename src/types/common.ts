import {FunctionComponent} from 'react';
import {routes} from '../constants';
import * as ImagePicker from 'react-native-image-picker';

export interface PayloadHttpList<T> {
  code?: number;
  message?: string;
  data?: T[];
}

export type ToastType = {
  text2: string;
};

export type _id = {
  _id: string;
};

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
};

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};

export type BaseResponse<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T;
};
