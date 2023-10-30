import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ReportAdmService, ReportService} from '../services';
import {ReportActions} from '../reducer';

function* getListTeacherSaga(action: PayloadAction<any>): Generator {
  try {
    const {data}: any = yield call(
      ReportAdmService.getReportByTeacher,
      action.payload,
    );
    if (data.status == 200) {
      yield put(ReportActions.setListReportAdm(data.data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getDataDetailAcceptSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      ReportAdmService.getDataDetailAccept,
      action.payload,
    );
    if (data.status == 200) {
      console.log('run push tookit');
      yield put(ReportActions.setDetailReport(data));
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default function* watchReportSagaAdm() {
  yield takeLatest(ReportActions.getListReportAdm.type, getListTeacherSaga);
  yield takeLatest(ReportActions.getDetailAccept.type, getDataDetailAcceptSaga);
}
