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
    console.log('data saga :', data);
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

export default function* watchReportSaga() {
  yield takeLatest(
    ReportActions.getListHistoryTeacher.type,
    getHistoryReportTeacherSaga,
  );
}
