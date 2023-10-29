import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ReportService} from '../services';
import {ReportActions} from '../reducer';

function* getHistoryReportTeacherSaga(
  action: PayloadAction<number>,
): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      ReportService.getHistoryTeacher,
      action.payload,
    );
    if (data.status == 200) {
      console.log('run push tookit');
      yield put(ReportActions.setListHistoryTeacher(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getCreateReportTeacherSaga(): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(ReportService.getCreactReport);
    if (data.status == 200) {
      console.log('run push tookit');
      yield put(ReportActions.setListCreateReport(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getReportTeacherSaga(action: any): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      ReportService.postDataReport,
      action.payload,
    );
    console.log(data);
    if (data && data.status === 200) {
      console.log('run push tookit');
      yield put(ReportActions.setReport(data));
    } else {
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default function* watchReportSaga() {
  yield takeLatest(
    ReportActions.getListHistoryTeacher.type,
    getHistoryReportTeacherSaga,
  );
  yield takeLatest(
    ReportActions.getListCreateReport.type,
    getCreateReportTeacherSaga,
  );
  yield takeLatest(ReportActions.postReport.type, getReportTeacherSaga);
}
