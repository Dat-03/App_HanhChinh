import {
  PayloadAction,
  PayloadActionCreator,
  createSlice,
} from '@reduxjs/toolkit';
import {PayloadHttpListPage} from '../../types';
import {
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
      const currentData: ReportType[] = state.historyReportData?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];

      return {
        ...state,
        historyReportData: {
          data: updatedData,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
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
      const currentData: ReportType[] = state.listReportAdm?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listReportAdm: {
          data: updatedData,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
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
      const currentData: ReportType[] = state.listAccptReportAdm?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listAccptReportAdm: {
          data: updatedData,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
        },
      };
    },

    clearReport: (state: ReportState) => {
      return {
        listReportAdm: undefined,
        listAccptReportAdm: undefined,
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
    postDoneReport: (state: ReportState, action: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
    postCancelReport: (state: ReportState, action: PayloadAction<any>) => {
      return {
        ...state,
      };
    },
  },
});

export const ReportReducer = reducer.reducer;
export const ReportActions = reducer.actions;
