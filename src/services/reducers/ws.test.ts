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
import { allOrders, userOrders } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("constructor reducer test", () => {
  it("should handle set ingredient", () => {
    expect(reducer(state, wsAllOrdersConnectionClosed())).toEqual({
      ...state,
      allOrdersError: undefined,
      wsAllOrders: false,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  });
});
