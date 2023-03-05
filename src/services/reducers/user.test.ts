import { userReducer as reducer, $initialState as state } from "./user";
import {
  setRegistration,
  setRegistrationSuccess,
  setRegistrationFailed,
  setLogin,
  setLoginSuccess,
  setLoginFailed,
  setForgotPassword,
  setForgotPasswordSuccess,
  setForgotPasswordFailed,
  setForgotPasswordState,
  setResetPassword,
  setResetPasswordSuccess,
  setResetPasswordFailed,
  setGetUserData,
  setGetUserDataSuccess,
  setGetUserDataFailed,
  setSendUserData,
  setSendUserDataSuccess,
  setSendUserDataFailed,
  setLogout,
  setLogoutSuccess,
  setLogoutFailed,
  setRefreshToken,
  setRefreshTokenSuccess,
  setRefreshTokenFailed,
  setCheckAuth,
  setCheckAuthSuccess,
} from "../actions/user";
import {
  userOrders,
  user,
  userData,
  login,
  error,
} from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("get user reducer test", () => {
  it("setRegistration test", () => {
    expect(reducer(state, setRegistration())).toEqual({
      ...state,
      registrationRequest: true,
      registrationRequestFailed: false,
    });
  });
  it("setRegistrationSuccess test", () => {
    expect(reducer(state, setRegistrationSuccess(userData))).toEqual({
      ...state,
      registrationRequest: false,
      userData: userData,
    });
  });
  it("setRegistrationFailed test", () => {
    expect(reducer(state, setRegistrationFailed())).toEqual({
      ...state,
      registrationRequest: false,
      registrationRequestFailed: true,
    });
  });
  it("setLogin test", () => {
    expect(reducer(state, setLogin())).toEqual({
      ...state,
      loginRequest: true,
      loginRequestFailed: false,
    });
  });
  it("setLoginSuccess test", () => {
    expect(reducer(state, setLoginSuccess(login))).toEqual({
      ...state,
      loginRequest: false,
      userData: userData,
    });
  });
  it("setLoginFailed test", () => {
    expect(reducer(state, setLoginFailed(error))).toEqual({
      ...state,
      loginRequest: false,
      loginRequestFailed: true,
    });
  });
  it("setForgotPassword test", () => {
    expect(reducer(state, setForgotPassword())).toEqual({
      ...state,
      forgotPasswordRequest: true,
      forgotPasswordRequestFailed: false,
    });
  });
  it("setForgotPasswordSuccess test", () => {
    expect(reducer(state, setForgotPasswordSuccess())).toEqual({
      ...state,
      forgotPasswordRequest: false,
    });
  });
  it("setForgotPasswordFailed test", () => {
    expect(reducer(state, setForgotPasswordFailed())).toEqual({
      ...state,
      forgotPasswordRequest: false,
      forgotPasswordRequestFailed: true,
    });
  });
  it("setResetPassword test", () => {
    expect(reducer(state, setResetPassword())).toEqual({
      ...state,
      resetPasswordRequest: true,
      resetPasswordRequestFailed: false,
    });
  });
  it("setResetPasswordSuccess test", () => {
    expect(reducer(state, setResetPasswordSuccess())).toEqual({
      ...state,
      resetPasswordRequest: false,
    });
  });
  it("setResetPasswordFailed test", () => {
    expect(reducer(state, setResetPasswordFailed())).toEqual({
      ...state,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: true,
    });
  });
  it("setGetUserData test", () => {
    expect(reducer(state, setGetUserData())).toEqual({
      ...state,
      getUserDataRequest: true,
      getUserDataRequestFailed: false,
    });
  });
  it("setGetUserDataSuccess test", () => {
    expect(reducer(state, setGetUserDataSuccess(userData))).toEqual({
      ...state,
      getUserDataRequest: false,
      userData: userData,
    });
  });
  it("setGetUserDataFailed test", () => {
    expect(reducer(state, setGetUserDataFailed())).toEqual({
      ...state,
      getUserDataRequest: false,
      getUserDataRequestFailed: true,
    });
  });
  it("setSendUserData test", () => {
    expect(reducer(state, setSendUserData())).toEqual({
      ...state,
      sendUserDataRequest: true,
      sendUserDataRequestFailed: false,
    });
  });
  it("setSendUserDataSuccess test", () => {
    expect(reducer(state, setSendUserDataSuccess(userData))).toEqual({
      ...state,
      sendUserDataRequest: false,
      userData: userData,
    });
  });
  it("setSendUserDataFailed test", () => {
    expect(reducer(state, setSendUserDataFailed())).toEqual({
      ...state,
      sendUserDataRequest: false,
      sendUserDataRequestFailed: true,
    });
  });
  it("setLogout test", () => {
    expect(reducer(state, setLogout())).toEqual({
      ...state,
      logoutRequest: true,
      logoutRequestFailed: false,
    });
  });
  it("setLogoutSuccess test", () => {
    expect(reducer(state, setLogoutSuccess())).toEqual({
      ...state,
      logoutRequest: false,
      userData: null,
    });
  });
  it("setLogoutFailed test", () => {
    expect(reducer(state, setLogoutFailed(error))).toEqual({
      ...state,
      logoutRequest: false,
      logoutRequestFailed: true,
    });
  });
  it("setRefreshToken test", () => {
    expect(reducer(state, setRefreshToken())).toEqual({
      ...state,
      refreshTokenRequest: true,
      refreshTokenRequestFailed: false,
    });
  });
  it("setRefreshTokenSuccess test", () => {
    expect(reducer(state, setRefreshTokenSuccess())).toEqual({
      ...state,
      refreshTokenRequest: false,
    });
  });
  it("setRefreshTokenFailed test", () => {
    expect(reducer(state, setRefreshTokenFailed(error))).toEqual({
      ...state,
      refreshTokenRequest: false,
      refreshTokenRequestFailed: true,
    });
  });
  it("setCheckAuth test", () => {
    expect(reducer(state, setCheckAuth())).toEqual({
      ...state,
      checkAuthRequest: true,
      checkAuthFailed: false,
      isAuthChecked: false,
    });
  });
  it("setCheckAuthSuccess test", () => {
    expect(reducer(state, setCheckAuthSuccess())).toEqual({
      ...state,
      checkAuthRequest: false,
      checkAuthFailed: false,
      isAuthChecked: true,
    });
  });
});
