/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import api from '../../utils/api-config';
import { setCookie, deleteCookie } from '../../utils/cookie';
import {
  REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_FAILED,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
  FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, SET_FORGOT_PASSWORD_STATE,
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED,
  GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED,
  SEND_USER_DATA, SEND_USER_DATA_SUCCESS, SEND_USER_DATA_FAILED,
  LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED,
  REFRESH_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED,
  CHECK_AUTH, CHECK_AUTH_CHECKED,
} from '../constants/user';

import type { AppThunk } from '../types';
import type { ILoginResponse } from '../types/api';
import type {
  IError, ISetCheckAuth, ISetCheckAuthChecked,
  ISetForgotPassword, ISetForgotPasswordFailed, ISetForgotPasswordSuccess, ISetGetUserData,
  ISetGetUserDataFailed, ISetGetUserDataSuccess, ISetLogin, ISetLoginFailed, ISetLoginSuccess,
  ISetLogout, ISetLogoutFailed, ISetLogoutSuccess, ISetRefreshToken, ISetRefreshTokenFailed,
  ISetRefreshTokenSuccess, ISetRegistration, ISetRegistrationFailed, ISetRegistrationSuccess,
  ISetResetPassword, ISetResetPasswordFailed, ISetResetPasswordSuccess, ISetSendUserData,
  ISetSendUserDataFailed, ISetSendUserDataSuccess, IUser,
} from '../types/export';

export const setRegistration = (): ISetRegistration => ({ type: REGISTRATION });
export const setRegistrationSuccess = (userData: IUser): ISetRegistrationSuccess => ({ type: REGISTRATION_SUCCESS, payload: userData });
export const setRegistrationFailed = (): ISetRegistrationFailed => ({ type: REGISTRATION_FAILED });

export const setLogin = (): ISetLogin => ({ type: LOGIN });
export const setLoginSuccess = (userData: ILoginResponse): ISetLoginSuccess => ({ type: LOGIN_SUCCESS, payload: userData.user });
export const setLoginFailed = (err: IError): ISetLoginFailed => ({ type: LOGIN_FAILED, payload: err.message });

export const setForgotPassword = (): ISetForgotPassword => ({ type: FORGOT_PASSWORD });
export const setForgotPasswordSuccess = (): ISetForgotPasswordSuccess => ({ type: FORGOT_PASSWORD_SUCCESS });
export const setForgotPasswordFailed = (): ISetForgotPasswordFailed => ({ type: FORGOT_PASSWORD_FAILED });
export const setForgotPasswordState = (store: boolean) => ({ type: SET_FORGOT_PASSWORD_STATE, payload: store });

export const setResetPassword = (): ISetResetPassword => ({ type: RESET_PASSWORD });
export const setResetPasswordSuccess = (): ISetResetPasswordSuccess => ({ type: RESET_PASSWORD_SUCCESS });
export const setResetPasswordFailed = (): ISetResetPasswordFailed => ({ type: RESET_PASSWORD_FAILED });

export const setGetUserData = (): ISetGetUserData => ({ type: GET_USER_DATA });
export const setGetUserDataSuccess = (userData: IUser): ISetGetUserDataSuccess => ({ type: GET_USER_DATA_SUCCESS, payload: userData });
export const setGetUserDataFailed = (): ISetGetUserDataFailed => ({ type: GET_USER_DATA_FAILED });

export const setSendUserData = (): ISetSendUserData => ({ type: SEND_USER_DATA });
export const setSendUserDataSuccess = (userData: IUser): ISetSendUserDataSuccess => ({ type: SEND_USER_DATA_SUCCESS, payload: userData });
export const setSendUserDataFailed = (): ISetSendUserDataFailed => ({ type: SEND_USER_DATA_FAILED });

export const setLogout = (): ISetLogout => ({ type: LOGOUT });
export const setLogoutSuccess = (): ISetLogoutSuccess => ({ type: LOGOUT_SUCCESS });
export const setLogoutFailed = (err: IError): ISetLogoutFailed => ({ type: LOGOUT_FAILED, payload: err.message });

export const setRefreshToken = (): ISetRefreshToken => ({ type: REFRESH_TOKEN });
export const setRefreshTokenSuccess = (): ISetRefreshTokenSuccess => ({ type: REFRESH_TOKEN_SUCCESS });
export const setRefreshTokenFailed = (err: IError): ISetRefreshTokenFailed => ({ type: REFRESH_TOKEN_FAILED, payload: err.message });

export const setCheckAuth = (): ISetCheckAuth => ({ type: CHECK_AUTH });
export const setCheckAuthSuccess = (): ISetCheckAuthChecked => ({ type: CHECK_AUTH_CHECKED });

export const registration: AppThunk = (email: string, name: string, password: string) => (dispatch) => {
  dispatch(setRegistration());
  api.postRegister(email, name, password)
    .then((res) => {
      // console.log('registration done');
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setRegistrationSuccess(res.user));
    })
    .catch(() => {
      // console.log('registration failed');
      dispatch(setRegistrationFailed());
    });
};

export const login: AppThunk = (email: string, password: string) => (dispatch) => {
  dispatch(setLogin());
  api.postLogin(email, password)
    .then((res) => {
      // console.log('log in success');
      setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(setLoginSuccess(res));
    })
    .catch((err) => {
      dispatch(setLoginFailed(err));
    });
};

export const logout: AppThunk = (refreshToken: string) => (dispatch) => {
  dispatch(setLogout());
  api.postLogout(refreshToken)
    .then(() => {
      // console.log('log out,delete cookie');
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(setLogoutSuccess());
    })
    .catch((err) => {
      dispatch(setLoginFailed(err));
    });
};

const refreshToken: AppThunk = (refreshToken: string) => (dispatch) => {
  if (!refreshToken) {
    throw new Error('Token does not exist in storage');
  } else {
    dispatch(setRefreshToken());
    api.postRefreshToken(refreshToken)
      .then((res) => {
      // console.log('token is refresh');
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch(setRefreshTokenSuccess());
      })
      .catch((err) => {
      // console.log('token in error');
        dispatch(logout());
        dispatch(setRefreshTokenFailed(err));
        return Promise.reject(err);
      });
  }
};

export const getUserData: AppThunk = (accessToken: string) => (dispatch) => {
  dispatch(setGetUserData());
  api.getUserData(accessToken)
    .then((res) => {
      dispatch(setGetUserDataSuccess(res.user));
    })
    .catch((err) => {
      if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
        // При передаче имени ключа возвращается значение этого ключа.
        dispatch(refreshToken(localStorage.getItem('refreshToken'), 'getUserData'));
      } else {
        dispatch(setGetUserDataFailed());
      }
    });
};

export const sendUserData: AppThunk = (accessToken: string, name: string, email: string, password: string) => (dispatch) => {
  dispatch(setSendUserData());
  api.patchUserData(accessToken, name, email, password)
    .then((res) => {
      // @ts-ignore
      dispatch(setSendUserDataSuccess(res));
    })
    .catch((err) => {
      if (err.message === 'jwt expired' || err.message === 'You should be authorised') {
        dispatch(refreshToken(localStorage.getItem('refreshToken')));
      }
      dispatch(setSendUserDataFailed());
    });
};

export const forgotPassword: AppThunk = (email: string) => (dispatch) => {
  dispatch(setForgotPassword());
  api.postEmail(email)
    .then(() => {
      setForgotPasswordSuccess();
    })
    .catch(() => {
      setForgotPasswordFailed();
    });
};

export const resetPassword: AppThunk = (password: string, token: string) => (dispatch) => {
  dispatch(setResetPassword());
  api.postResetPassword(password, token)
    .then(() => {
      dispatch(setResetPasswordSuccess());
    })
    .catch(() => {
      dispatch(setResetPasswordFailed());
    });
};

export const checkAuth: AppThunk = (accessToken: string) => (dispatch) => {
  dispatch(setCheckAuth());
  if (accessToken) {
    // console.log('auth - OK');
    dispatch(getUserData(accessToken));
  }
  dispatch(setCheckAuthSuccess());
};
