import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLatest} from 'redux-saga/effects';
import {routes} from '../../constants';
import {NavigationService} from '../../navigation';
import {showToastError, showToastSuccess} from '../../utils';
import {AppActions, AuthActions} from '../reducer';
import {AuthService, UserService} from '../services';
import {LoginPayload} from '../types';

//get profile user
function* getProfileUserSaga(): Generator {
  try {
    const {data}: any = yield call(UserService.getUserProfile);
    if (data.code === 200) {
      yield put(
        AuthActions.getUserInfoSuccess({
          user: data.data,
        }),
      );
    } else {
      yield call(cleanUser);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

//clean user
function* cleanUser(): Generator {
  yield put(
    AuthActions.getUserInfoFailed({
      enableSignIn: false,
      accessToken: '',
      refreshToken: '',
      user: {},
    }),
  );
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.getUserInfo.type, getProfileUserSaga);
}
