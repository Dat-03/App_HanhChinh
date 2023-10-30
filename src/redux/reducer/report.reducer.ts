import {
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from '@reduxjs/toolkit';
import {PayloadHttpList, PayloadHttpListPage} from '../../types';
import {
  HistoryReportType,
  ListReportAdmType,
  PayloadHttp,
  PayloadHttpListCreateReport,
  ReportState,
  ReportType,
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
      action: PayloadAction<PayloadHttpList<ReportType>>,
    ) => {
      return {
        ...state,
        historyReportData: {
          data: action.payload.data,
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
      action: PayloadAction<PayloadHttp<ReportType>>,
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
      action: PayloadAction<PayloadHttpListPage<ReportType>>,
    ) => {
      return {
        listReportAdm: {
          ...state,
          data: action.payload.data,
        },
      };
    },

    getDetailReport: (state: ReportState, _: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
    setDetailReport: (
      state: ReportState,
      action: PayloadAction<PayloadHttp<ReportType>>,
    ) => {
      return {
        detailData: {
          ...state,
          data: action.payload.data,
        },
      };
    },

    getDetailAccept: (state: ReportState, action: PayloadAction<string>) => {
      return {
        ...state,
      };
    },
  },
});

export const ReportReducer = reducer.reducer;
export const ReportActions = reducer.actions;
