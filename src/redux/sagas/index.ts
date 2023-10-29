import {all, fork} from 'redux-saga/effects';
import watchAuthSaga from './auth.saga';
import watchReportSaga from './report.saga';
import watchReportSagaAdm from './report.adm.saga';

export default function* RootSaga() {
  yield all([
    fork(watchAuthSaga),
    fork(watchReportSaga),
    fork(watchReportSagaAdm),
  ]);
}
