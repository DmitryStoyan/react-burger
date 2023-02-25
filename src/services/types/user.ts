import type {
  REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_FAILED, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
  FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, RESET_PASSWORD, RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED, SEND_USER_DATA,
  SEND_USER_DATA_SUCCESS, SEND_USER_DATA_FAILED, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED, REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED, SET_FORGOT_PASSWORD_STATE, CHECK_AUTH, CHECK_AUTH_CHECKED,
} from '../constants/user';
import type { IUser } from './export';

export interface IUserState {
  registrationRequest: boolean,
  registrationRequestFailed: boolean,

  loginRequest: boolean,
  loginRequestFailed: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordRequestFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordRequestFailed: boolean,

  getUserDataRequest: boolean,
  getUserDataRequestFailed: boolean,

  logoutRequest: boolean,
  logoutRequestFailed: boolean,

  refreshTokenRequest: boolean,
  refreshTokenRequestFailed: boolean,

  sendUserDataRequest: boolean,
  sendUserDataRequestFailed: boolean,

  isPasswordForgot: boolean,

  userData: IUser | null,

  isAuthChecked: boolean,
  checkAuthRequest: boolean,
  checkAuthFailed: boolean,
}

export interface ISetRegistration {
  type: typeof REGISTRATION;
}
export interface ISetRegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS;
  payload: IUser;
}
export interface ISetRegistrationFailed {
  type: typeof REGISTRATION_FAILED;
}

export interface ISetLogin {
  type: typeof LOGIN;
}
export interface ISetLoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: IUser | null;
}
export interface ISetLoginFailed {
  type: typeof LOGIN_FAILED;
  payload: string;
}

export interface ISetForgotPassword {
  type: typeof FORGOT_PASSWORD;
}
export interface ISetForgotPasswordSuccess {
  type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface ISetForgotPasswordFailed {
  type: typeof FORGOT_PASSWORD_FAILED;
}

export interface ISetResetPassword {
  type: typeof RESET_PASSWORD;
}
export interface ISetResetPasswordSuccess {
  type: typeof RESET_PASSWORD_SUCCESS;
}
export interface ISetResetPasswordFailed {
  type: typeof RESET_PASSWORD_FAILED;
}

export interface ISetGetUserData {
  type: typeof GET_USER_DATA;
}
export interface ISetGetUserDataSuccess {
  type: typeof GET_USER_DATA_SUCCESS;
  payload: IUser;
}
export interface ISetGetUserDataFailed {
  type: typeof GET_USER_DATA_FAILED;
}

export interface ISetSendUserData {
  type: typeof SEND_USER_DATA;
}
export interface ISetSendUserDataSuccess {
  type: typeof SEND_USER_DATA_SUCCESS;
  payload: IUser;
}
export interface ISetSendUserDataFailed {
  type: typeof SEND_USER_DATA_FAILED;
}

export interface ISetLogout {
  type: typeof LOGOUT;
}
export interface ISetLogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}
export interface ISetLogoutFailed {
  type: typeof LOGOUT_FAILED;
  payload: string;
}

export interface ISetRefreshToken {
  type: typeof REFRESH_TOKEN;
}
export interface ISetRefreshTokenSuccess {
  type: typeof REFRESH_TOKEN_SUCCESS;
}
export interface ISetRefreshTokenFailed {
  type: typeof REFRESH_TOKEN_FAILED;
  payload: string;
}

export interface ISetForgotPasswordState {
  type: typeof SET_FORGOT_PASSWORD_STATE;
  payload: boolean;
}

export interface ISetCheckAuth {
  type: typeof CHECK_AUTH;
}

export interface ISetCheckAuthChecked {
  type: typeof CHECK_AUTH_CHECKED;
}

export type TUserActions =
| ISetRegistration
| ISetRegistrationSuccess
| ISetRegistrationFailed

| ISetLogin
| ISetLoginSuccess
| ISetLoginFailed

| ISetForgotPassword
| ISetForgotPasswordSuccess
| ISetForgotPasswordFailed

| ISetResetPassword
| ISetResetPasswordSuccess
| ISetResetPasswordFailed

| ISetGetUserData
| ISetGetUserDataSuccess
| ISetGetUserDataFailed

| ISetSendUserData
| ISetSendUserDataSuccess
| ISetSendUserDataFailed

| ISetLogout
| ISetLogoutSuccess
| ISetLogoutFailed

| ISetRefreshToken
| ISetRefreshTokenSuccess
| ISetRefreshTokenFailed

| ISetForgotPasswordState

| ISetCheckAuth
| ISetCheckAuthChecked;
