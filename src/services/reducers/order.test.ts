import { orderReducer as reducer, $initialState as state } from "./order";
import {
  resetOrderError,
  postOrder,
  postOrderSuccess,
  postOrderFailed,
} from "../actions/order";
import { order } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("order reducer test", () => {
  it("post order", () => {
    expect(reducer(state, postOrderSuccess(1))).toEqual({
      orderRequest: false,
      orderRequestFailed: false,
      orderNumber: 1,
      isOrderDetailsOpened: true,
    });
  });
  it("reset order order test", () => {
    expect(reducer(state, resetOrderError())).toEqual({
      orderRequest: false,
      orderRequestFailed: false,
      orderNumber: null,
      isOrderDetailsOpened: false,
    });
  });
  it("postOrder test", () => {
    expect(reducer(state, postOrder())).toEqual({
      orderRequest: true,
      orderRequestFailed: false,
      orderNumber: null,
      isOrderDetailsOpened: false,
    });
  });
  it("postOrder test", () => {
    expect(reducer(state, postOrderFailed())).toEqual({
      orderRequest: false,
      orderRequestFailed: true,
      orderNumber: null,
      isOrderDetailsOpened: false,
    });
  });
});
