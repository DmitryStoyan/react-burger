/* eslint-disable default-param-last */
import {
  REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  SEND_USER_DATA,
  SEND_USER_DATA_SUCCESS,
  SEND_USER_DATA_FAILED,
  SET_FORGOT_PASSWORD_STATE,
  CHECK_AUTH,
  CHECK_AUTH_CHECKED,
} from "../constants/export";

import type { IUserState, TUserActions } from "../types/export";

export const $initialState: IUserState = {
  registrationRequest: false,
  registrationRequestFailed: false,

  loginRequest: false,
  loginRequestFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordRequestFailed: false,

  resetPasswordRequest: false,
  resetPasswordRequestFailed: false,

  getUserDataRequest: false,
  getUserDataRequestFailed: false,

  logoutRequest: false,
  logoutRequestFailed: false,

  refreshTokenRequest: false,
  refreshTokenRequestFailed: false,

  sendUserDataRequest: false,
  sendUserDataRequestFailed: false,

  isPasswordForgot: false,

  userData: null,

  isAuthChecked: false,
  checkAuthRequest: false,
  checkAuthFailed: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const userReducer = (
  state = $initialState,
  action: TUserActions
): IUserState => {
  switch (action.type) {
    case REGISTRATION: {
      return {
        ...state,
        registrationRequest: true,
        registrationRequestFailed: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        userData: action.payload,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationRequestFailed: true,
      };
    }
    case LOGIN: {
      return {
        ...state,
        loginRequest: true,
        loginRequestFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        userData: action.payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: true,
      };
    }
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordRequestFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordRequestFailed: true,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordRequestFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: true,
      };
    }
    case GET_USER_DATA: {
      return {
        ...state,
        getUserDataRequest: true,
        getUserDataRequestFailed: false,
      };
    }
    case GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        getUserDataRequest: false,
        userData: action.payload,
      };
    }
    case GET_USER_DATA_FAILED: {
      return {
        ...state,
        getUserDataRequest: false,
        getUserDataRequestFailed: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        logoutRequest: true,
        logoutRequestFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        userData: null,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutRequestFailed: true,
      };
    }
    case REFRESH_TOKEN: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenRequestFailed: false,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        // accessToken: action.payload,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenRequestFailed: true,
      };
    }
    case SEND_USER_DATA: {
      return {
        ...state,
        sendUserDataRequest: true,
        sendUserDataRequestFailed: false,
      };
    }
    case SEND_USER_DATA_SUCCESS: {
      return {
        ...state,
        sendUserDataRequest: false,
        userData: action.payload,
      };
    }
    case SEND_USER_DATA_FAILED: {
      return {
        ...state,
        sendUserDataRequest: false,
        sendUserDataRequestFailed: true,
      };
    }
    case SET_FORGOT_PASSWORD_STATE: {
      return {
        ...state,
        isPasswordForgot: action.payload,
      };
    }
    case CHECK_AUTH: {
      return {
        ...state,
        checkAuthRequest: true,
        checkAuthFailed: false,
        isAuthChecked: false,
      };
    }
    case CHECK_AUTH_CHECKED: {
      return {
        ...state,
        checkAuthRequest: false,
        checkAuthFailed: false,
        isAuthChecked: true,
      };
    }
    default: {
      return state;
    }
  }
};
