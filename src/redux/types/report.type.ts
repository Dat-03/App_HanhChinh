import {
  _id,
  PayloadHttpList,
  RoomType,
  Timestamp,
  TypeReportHistory,
} from '../../types';

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
  };

export type ReportState = Partial<{
  historyReportData: PayloadHttpList<HistoryReportType>;
  createReportData: PayloadHttpListCreateReport;
  dataReport: PayloadHttpList<HistoryReportType>;
}>;
