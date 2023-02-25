import api from '../../utils/api-config';
import {
  WS_CONNECTION_START, WS_USER_ORDERS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_CLOSED,
  WS_USER_ORDERS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_GET_ALL_ORDERS,
  GET_ORDER_INFO, GET_ORDER_INFO_SUCCESS, GET_ORDER_INFO_FAILED, CLEAN_ORDER_INFO,
  WS_USER_ORDERS_CONNECTION_SUCCESS, WS_USER_ORDERS_CONNECTION_ERROR, WS_GET_USER_ORDERS,
} from '../constants/ws';

import type {
  AppThunk, AppDispatch, IOrder, IWsActions, IWsUserActions, IOrderInfo, IOrderInfoLoading, IOrderInfoLoadingFailed,
  IOrderInfoLoadingSuccess, IWsAllOrdersConnectionClosed, IWSAllOrdersConnectionStart, IWsUserOrdersConnectionClosed,
  IWSUserOrdersConnectionStart,
} from '../types/export';

export const wsAllOrdersConnectionStart = (): IWSAllOrdersConnectionStart => ({
  type: WS_CONNECTION_START,
});

export const wsUserOrdersConnectionStart = (url: string): IWSUserOrdersConnectionStart => ({
  type: WS_USER_ORDERS_CONNECTION_START, payload: url,
});

export const wsAllOrdersConnectionClosed = (): IWsAllOrdersConnectionClosed => ({
  type: WS_CONNECTION_CLOSED,
});

export const wsUserOrdersConnectionClosed = (): IWsUserOrdersConnectionClosed => ({
  type: WS_USER_ORDERS_CONNECTION_CLOSED,
});

export const getOrderInfoLoading = (): IOrderInfoLoading => ({ type: GET_ORDER_INFO });

export const getOrderInfoLoadingSuccess = (data: IOrder): IOrderInfoLoadingSuccess => ({ type: GET_ORDER_INFO_SUCCESS, payload: data });

export const getOrderInfoLoadingFailed = (): IOrderInfoLoadingFailed => ({ type: GET_ORDER_INFO_FAILED });

export const cleanOrderInfo = (): IOrderInfo => ({ type: CLEAN_ORDER_INFO });

export const getOrderInfo: AppThunk = (orderNumber: number) => (dispatch: AppDispatch) => {
  dispatch(getOrderInfoLoading());
  api.getOrderInfo(orderNumber)
    .then((data) => {
      if (data) {
        dispatch(getOrderInfoLoadingSuccess(data.orders[0]));
      }
    })
    .catch(() => dispatch(getOrderInfoLoadingFailed()));
};

export const wsUserOrdersActions: IWsUserActions = {
  wsInitWithToken: WS_USER_ORDERS_CONNECTION_START,
  onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: WS_GET_USER_ORDERS,
};

export const wsAllOrdersActions: IWsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_ORDERS,
};
