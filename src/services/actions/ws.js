import api from "../../utils/api-config";

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ALL_ORDERS = 'WS_GET_ORDERS';

export const WS_USER_ORDERS_CONNECTION_START = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_ERROR = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_GET_USER_ORDERS = 'WS_GET_USER_ORDERS';

export const GET_ORDER_INFO = 'GET_ORDER_INFO';
export const GET_ORDER_INFO_SUCCESS = 'GET_ORDER_INFO_SUCCESS';
export const GET_ORDER_INFO_FAILED = 'GET_ORDER_INFO_FAILED';
export const CLEAN_ORDER_INFO = 'CLEAN_ORDER_INFO';

export const wsAllOrdersConnectionStart = () => ({
  type: WS_CONNECTION_START,
});

export const wsUserOrdersConnectionStart = (url) => ({
  type: WS_USER_ORDERS_CONNECTION_START, payload: url,
});

export const wsAllOrdersConnectionClosed = () => ({
  type: WS_CONNECTION_CLOSED,
});

export const wsUserOrdersConnectionClosed = () => ({
  type: WS_USER_ORDERS_CONNECTION_CLOSED,
});

export const getOrderInfoLoading = () => ({ type: GET_ORDER_INFO });
export const getOrderInfoLoadingSuccess = (data) => ({ type: GET_ORDER_INFO_SUCCESS, payload: data });
export const getOrderInfoLoadingFailed = () => ({ type: GET_ORDER_INFO_FAILED });
export const cleanOrderInfo = () => ({ type: CLEAN_ORDER_INFO });

export const getOrderInfo = (orderNumber) => (dispatch) => {
  dispatch(getOrderInfoLoading());
  api.getOrderInfo(orderNumber)
    .then((data) => {
      if (data) {
        dispatch(getOrderInfoLoadingSuccess(data.orders[0]));
      }
    })
    .catch(() => dispatch(getOrderInfoLoadingFailed()));
};

export const wsAllOrdersActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ALL_ORDERS,
};

export const wsUserOrdersActions = {
  wsInitWithToken: WS_USER_ORDERS_CONNECTION_START,
  onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: WS_USER_ORDERS_CONNECTION_ERROR,
  onMessage: WS_GET_USER_ORDERS,
};
