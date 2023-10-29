import {Role} from 'react-native';
import {
  _id,
  PayloadHttpList,
  PayloadHttpListPage,
  RoomType,
  Timestamp,
  TypeReportHistory,
  User_CreateType,
} from '../../types';
import {User} from './auth.type';

export interface PayloadHttpListCreateReport {
  code?: number;
  message?: string;
  data?: DataCreateReport;
}

type DataCreateReport = {
  listRoom: ListRoom[];
  listTypeReport: ListTypeReport[];
};

type ListRoom = _id &
  Timestamp & {
    name: string;
    __v: number;
  };

type ListTypeReport = _id &
  Timestamp & {
    name: string;
    time_handle: string;
    __v: number;
  };

export type HistoryReportType = _id &
  Timestamp & {
    room: RoomType;
    type: TypeReportHistory;
    user_create: string;
    description: string;
    status: number;
    images: string[];
    __v: number;
    accept_report: string;
    user_handle: UserHandle;
  };

export type ListReportAdmType = _id &
  Timestamp & {
    room: RoomType;
    type: TypeReportHistory;
    user_create: User_CreateType;
    description: string;
    status: number;
    images: string[];
  };

type UserHandle = User &
  Timestamp & {
    __v: number;
    available: boolean;
    device_token: string;
  };

export type ReportState = Partial<{
  historyReportData: PayloadHttpList<HistoryReportType>;
  createReportData: PayloadHttpListCreateReport;
  dataReport: PayloadHttpList<HistoryReportType>;
  listReportAdm: PayloadHttpListPage<ListReportAdmType>;
}>;
