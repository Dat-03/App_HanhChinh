import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
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

function* getListAccptSaga(action: PayloadAction<any>): Generator {
  try {
    const {data}: any = yield call(
      ReportAdmService.getReportAccptByTeacher,
      action.payload,
    );
    if (data.status == 200) {
      yield put(ReportActions.setListAccptReportAdm(data.data));
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
  yield takeEvery(ReportActions.getListReportAdm.type, getListTeacherSaga);
  yield takeEvery(ReportActions.getListAccptReportAdm.type, getListAccptSaga);
  yield takeLatest(ReportActions.getDetailAccept.type, getDataDetailAcceptSaga);
}
