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
    getListHistoryTeacher: (state: ReportState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListHistoryTeacher: (
      state: ReportState,
      action: PayloadAction<PayloadHttpListPage<ReportType>>,
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
        ...state,
        listReportAdm: {
          data: action.payload.data,
        },
      };
    },

    getListAccptReportAdm: (state: ReportState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    setListAccptReportAdm: (
      state: ReportState,
      action: PayloadAction<PayloadHttpListPage<ReportType>>,
    ) => {
      return {
        ...state,
        listAccptReportAdm: {
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
        ...state,
        detailData: {
          data: action.payload.data,
        },
      };
    },

    getDetailAccept: (state: ReportState, action: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    getDetailTeacher: (state: ReportState, action: PayloadAction<string>) => {
      return {
        ...state,
      };
    },

    clearDetail: (state: ReportState) => {
      return {
        detailData: {},
      };
    },
  },
});

export const ReportReducer = reducer.reducer;
export const ReportActions = reducer.actions;
