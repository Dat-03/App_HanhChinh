import {RootState} from '../store';

export const getHistoryReportTeacher = (state: RootState) =>
  state.report.historyReportData?.data;

export const getListRoom = (state: RootState) =>
  state.report.createReportData?.data?.listRoom;

export const getListTypeReport = (state: RootState) =>
  state.report.createReportData?.data?.listTypeReport;

export const getDataReportTeacher = (state: RootState) =>
  state.report.dataReport?.data;
