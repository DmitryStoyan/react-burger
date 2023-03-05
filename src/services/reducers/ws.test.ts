import { ordersReducer as reducer, $initialState as state } from "./ws";
import {
  wsAllOrdersConnectionStart,
  wsUserOrdersConnectionStart,
  wsAllOrdersConnectionClosed,
  wsUserOrdersConnectionClosed,
  getOrderInfoLoading,
  getOrderInfoLoadingSuccess,
  getOrderInfoLoadingFailed,
  cleanOrderInfo,
} from "../actions/ws";
import { allOrders, userOrders, orders } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("constructor reducer test", () => {
  it("should handle wsAllOrdersConnectionClosed", () => {
    expect(reducer(state, wsAllOrdersConnectionClosed())).toEqual({
      ...state,
      allOrdersError: undefined,
      wsAllOrders: false,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });
  it("should handle wsUserOrdersConnectionClosed", () => {
    expect(reducer(state, wsUserOrdersConnectionClosed())).toEqual({
      ...state,
      userOrdersError: undefined,
      wsUserOrders: false,
      userOrders: [],
      total: 0,
      totalToday: 0,
    });
  });
  it("should handle getOrderInfoLoading", () => {
    expect(reducer(state, getOrderInfoLoading())).toEqual({
      ...state,
      orderInfoRequest: true,
      orderInfoFailed: false,
    });
  });
  it("should handle getOrderInfoLoadingSuccess", () => {
    expect(reducer(state, getOrderInfoLoadingSuccess(orders))).toEqual({
      ...state,
      orderInfoRequest: false,
      orderInfo: orders,
    });
  });
  it("should handle getOrderInfoLoadingFailed", () => {
    expect(reducer(state, getOrderInfoLoadingFailed())).toEqual({
      ...state,
      orderInfoRequest: false,
      orderInfoFailed: true,
    });
  });
  it("should handle cleanOrderInfo", () => {
    expect(reducer(state, cleanOrderInfo())).toEqual({
      ...state,
      orderInfoRequest: false,
      orderInfoFailed: false,
      orderInfo: null,
    });
  });
});
