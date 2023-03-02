/* eslint-disable default-param-last */
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_ORDERS,
  WS_GET_USER_ORDERS,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED,
  GET_ORDER_INFO,
  GET_ORDER_INFO_SUCCESS,
  GET_ORDER_INFO_FAILED,
  CLEAN_ORDER_INFO,
} from "../constants/export";

import type { IWsState, TWsActions } from "../types/export";

export const $initialState: IWsState = {
  wsAllOrders: false,
  wsUserOrders: false,
  orders: [],
  userOrders: [],
  total: 0,
  totalToday: 0,
  orderInfoRequest: false,
  orderInfoFailed: false,
  orderInfo: null,
  allOrdersError: undefined,
  userOrdersError: undefined,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const ordersReducer = (
  state = $initialState,
  action: TWsActions
): IWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        allOrdersError: undefined,
        wsAllOrders: true,
      };

    case WS_USER_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        userOrdersError: undefined,
        wsUserOrders: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        allOrdersError: action.payload,
        wsAllOrders: false,
      };

    case WS_USER_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        userOrdersError: action.payload,
        wsUserOrders: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        allOrdersError: undefined,
        wsAllOrders: false,
        orders: [],
        total: 0,
        totalToday: 0,
      };

    case WS_USER_ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        userOrdersError: undefined,
        wsUserOrders: false,
        userOrders: [],
        total: 0,
        totalToday: 0,
      };

    case WS_GET_ALL_ORDERS:
      return {
        ...state,
        allOrdersError: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    case WS_GET_USER_ORDERS:
      return {
        ...state,
        allOrdersError: undefined,
        userOrders: action.payload.orders,
      };
    case GET_ORDER_INFO:
      return {
        ...state,
        orderInfoRequest: true,
        orderInfoFailed: false,
      };
    case GET_ORDER_INFO_SUCCESS:
      return {
        ...state,
        orderInfoRequest: false,
        orderInfo: action.payload,
      };
    case GET_ORDER_INFO_FAILED:
      return {
        ...state,
        orderInfoRequest: false,
        orderInfoFailed: true,
      };
    case CLEAN_ORDER_INFO:
      return {
        ...state,
        orderInfoRequest: false,
        orderInfoFailed: false,
        orderInfo: null,
      };
    default:
      return state;
  }
};
