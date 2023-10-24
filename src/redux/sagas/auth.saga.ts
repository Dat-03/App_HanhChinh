import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';

import {NavigationService} from '../../navigation';
import {AuthActions} from '../reducer';
import {AuthService} from '../services';

import {LogOut} from '../../utils/google';

function* loginSaga(action: PayloadAction<number>): Generator {
  try {
    console.log('run');
    const {data}: any = yield call(AuthService.handleLogin, action.payload);
    if (data.status == 200) {
      console.log('run push tookit');
      yield put(AuthActions.handleLoginSuccess(data.data));
    } else {
      LogOut();
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.handleLogin.type, loginSaga);
}
