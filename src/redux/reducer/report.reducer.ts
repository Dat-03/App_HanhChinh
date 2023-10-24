import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PayloadHttpList} from '../../types';
import {HistoryReportType, ReportState} from '../types/report.type';
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
        },
      };
    },
  },
});

export const ReportReducer = reducer.reducer;
export const ReportActions = reducer.actions;
