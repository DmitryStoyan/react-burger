import { userReducer as reducer, $initialState as state } from "./user";
import {
  setRegistration,
  setRegistrationSuccess,
  setRegistrationFailed,
  setLogin,
  setLoginSuccess,
  setLoginFailed,
} from "../actions/user";
import { userOrders, user, userData, login } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("get user reducer test", () => {
  it("setRegistration test", () => {
    expect(reducer(state, setRegistration())).toEqual({
      ...state,
      registrationRequest: true,
      registrationRequestFailed: false,
    });
  });
  it("setRegistration test", () => {
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
  it("setRegistrationFailed test", () => {
    expect(reducer(state, setLogin())).toEqual({
      ...state,
      loginRequest: true,
      loginRequestFailed: false,
    });
  });
  it("setRegistrationFailed test", () => {
    expect(reducer(state, setLoginSuccess(login))).toEqual({
      ...state,
      loginRequest: false,
      userData: userData,
    });
  });
});
