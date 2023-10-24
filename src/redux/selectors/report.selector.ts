import {RootState} from '../store';

export const getHistoryReportTeacher = (state: RootState) =>
  state.report.historyReportData?.data;
