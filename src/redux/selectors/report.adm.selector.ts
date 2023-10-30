import {RootState} from '../store';

export const getListReportAdm = (state: RootState) =>
  state.report.listReportAdm?.data;

export const getListAccptReportAdm = (state: RootState) =>
  state.report.listAccptReportAdm?.data;
