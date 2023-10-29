import {RootState} from '../store';

export const getListReportAdm = (state: RootState) =>
  state.report.listReportAdm?.data;
