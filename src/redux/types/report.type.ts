import {
  _id,
  PayloadHttpList,
  RoomType,
  Timestamp,
  TypeReportHistory,
} from '../../types';

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
}>;
