import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ReportService} from '../services';
import {ReportActions} from '../reducer';
import {showToastError, showToastSuccess} from '../../utils';
import {NavigationService} from '../../navigation';
import {routes} from '../../constants';

function* getHistoryReportTeacherSaga(action: PayloadAction<any>): Generator {
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
      showToastSuccess(data.message);
      NavigationService.navigate(routes.SUPPORT, {_id: data.data._id});
    } else {
      showToastError(data.message);
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getDetailSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      ReportService.getDataDetatilReport,
      action.payload,
    );
    console.log(data);
    if (data && data.status === 200) {
      console.log('run push tookit');
      yield put(ReportActions.setDetailReport(data));
    } else {
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getDetailTeacherSaga(action: PayloadAction<string>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(
      ReportService.getDetailTeacher,
      action.payload,
    );
    console.log(data);
    if (data && data.status === 200) {
      console.log('run push tookit');
      yield put(ReportActions.setDetailReport(data));
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
  yield takeLatest(ReportActions.getDetailReport.type, getDetailSaga);
  yield takeLatest(ReportActions.getDetailTeacher.type, getDetailTeacherSaga);
}
