import type { IOrder } from './export';
import type {
  CLEAN_ORDER_INFO,
  GET_ORDER_INFO,
  GET_ORDER_INFO_FAILED,
  GET_ORDER_INFO_SUCCESS,
  WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS,
  WS_GET_ALL_ORDERS, WS_GET_USER_ORDERS, WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_START, WS_USER_ORDERS_CONNECTION_SUCCESS,
} from '../constants/ws';

export interface IWsUserActions {
  wsInitWithToken?: typeof WS_USER_ORDERS_CONNECTION_START,
  onOpen: typeof WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: typeof WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: typeof WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_USER_ORDERS,
}

export interface IWsActions {
  wsInit?: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  onMessage: typeof WS_GET_ALL_ORDERS,
}

export interface IWsState {
  wsAllOrders: boolean,
  wsUserOrders: boolean,
  orders: IOrder[],
  userOrders: IOrder[],
  total: number | null,
  totalToday: number,
  orderInfoRequest: boolean,
  orderInfoFailed: boolean,
  orderInfo: IOrder | null,
  allOrdersError?: Event,
  userOrdersError?: Event,
}

export interface IWSAllOrdersConnectionStart {
  type: typeof WS_CONNECTION_START;
}

export interface IWSUserOrdersConnectionStart {
  type: typeof WS_USER_ORDERS_CONNECTION_START;
  payload: string;
}

export interface IWsAllOrdersConnectionClosed {
  type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsUserOrdersConnectionClosed {
  type: typeof WS_USER_ORDERS_CONNECTION_CLOSED;
}

export interface IOrderInfoLoading {
  type: typeof GET_ORDER_INFO;
}

export interface IOrderInfoLoadingSuccess {
  type: typeof GET_ORDER_INFO_SUCCESS;
  payload: IOrder;
}

export interface IOrderInfoLoadingFailed {
  type: typeof GET_ORDER_INFO_FAILED;
}
//
export interface IOrderInfo {
  type: typeof CLEAN_ORDER_INFO;
}

export interface IWSAllOrdersConnectionSuccess {
  type: typeof WS_CONNECTION_SUCCESS;
  payload: Event;
}

export interface IWSUserOrdersConnectionSuccess {
  type: typeof WS_USER_ORDERS_CONNECTION_SUCCESS;
  payload: Event;
}

export interface IWSAllOrdersConnectionError {
  type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWSUserOrdersConnectionError {
  type: typeof WS_USER_ORDERS_CONNECTION_ERROR,
  payload: Event;
}

export interface IWsGetUserOrders {
  type: typeof WS_GET_USER_ORDERS;
  payload: IOrder;
}

export interface IWsGetAllOrders {
  type: typeof WS_GET_ALL_ORDERS
  payload: IOrder;
}

export type TWsActions =
  | IWSAllOrdersConnectionStart
  | IWSUserOrdersConnectionStart
  | IWsAllOrdersConnectionClosed
  | IWsUserOrdersConnectionClosed
  | IOrderInfoLoading
  | IOrderInfoLoadingSuccess
  | IOrderInfoLoadingFailed
  | IOrderInfo
  | IWSAllOrdersConnectionSuccess
  | IWSUserOrdersConnectionSuccess
  | IWSAllOrdersConnectionError
  | IWSUserOrdersConnectionError
  | IWsGetUserOrders
  | IWsGetAllOrders;
