import {Role} from 'react-native';
import {
  _id,
  PayloadHttpList,
  PayloadHttpListPage,
  RoomType,
  Timestamp,
  TypeReportHistory,
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

export type ReportType = _id &
  Timestamp & {
    __v: number;
    room: RoomType;
    type: TypeReportHistory;
    user_create: User_CreateType;
    user_handle: UserHandle;
    description: string;
    status: number;
    images: string[];
    accept_report: string | undefined;
    done_report: string | undefined;
    mistake: string | undefined;
  };

type UserHandle = User &
  Timestamp & {
    __v: number;
    available: boolean;
    device_token: string;
  };

type User_CreateType = User &
  Timestamp & {
    __v: number;
    available: boolean;
    device_token: string;
  };

export interface PayloadHttp<T> {
  data?: T;
}

export type ReportState = Partial<{
  historyReportData: PayloadHttpListPage<ReportType>;
  createReportData: PayloadHttpListCreateReport;
  dataReport: PayloadHttp<ReportType>;
  listReportAdm: PayloadHttpListPage<ReportType>;
  listAccptReportAdm: PayloadHttpListPage<ReportType>;
  detailData: PayloadHttp<ReportType>;
}>;
