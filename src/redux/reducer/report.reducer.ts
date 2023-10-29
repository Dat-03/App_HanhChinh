import {
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from '@reduxjs/toolkit';
import {PayloadHttpList, PayloadHttpListPage} from '../../types';
import {
  HistoryReportType,
  ListReportAdmType,
  PayloadHttpListCreateReport,
  ReportState,
} from '../types/report.type';
import {Redux} from '../types';

const initialState: ReportState = {};

const reducer = createSlice({
  name: Redux.report,
  initialState: initialState,
  reducers: {
    getListHistoryTeacher: (state: ReportState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListHistoryTeacher: (
      state: ReportState,
      action: PayloadAction<PayloadHttpList<HistoryReportType>>,
    ) => {
      return {
        ...state,
        historyReportData: {
          data: action.payload.data,
          message: action.payload.message,
          code: action.payload.code,
        },
      };
    },

    getListCreateReport: (state: ReportState) => {
      return {
        ...state,
      };
    },
    setListCreateReport: (
      state: ReportState,
      action: PayloadAction<PayloadHttpListCreateReport>,
    ) => {
      return {
        ...state,
        createReportData: {
          data: action.payload.data,
        },
      };
    },

    postReport: (state: ReportState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setReport: (
      state: ReportState,
      action: PayloadAction<PayloadHttpList<HistoryReportType>>,
    ) => {
      return {
        ...state,
        dataReport: {
          data: action.payload.data,
        },
      };
    },

    getListReportAdm: (state: ReportState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListReportAdm: (
      state: ReportState,
      action: PayloadAction<PayloadHttpListPage<ListReportAdmType>>,
    ) => {
      return {
        listReportAdm: {
          ...state,
          data: action.payload.data,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
        },
      };
    },
  },
});

export const ReportReducer = reducer.reducer;
export const ReportActions = reducer.actions;
