import type {
  CLOSE_ORDER_DETAILS, RESET_ORDER_ERROR, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FAILED,
} from '../constants/order';

export interface IOrderState {
  orderNumber: number | null;
  orderRequest: boolean;
  orderRequestFailed: boolean;
  isOrderDetailsOpened: boolean;
}

export interface IСloseOrderModal {
  type: typeof CLOSE_ORDER_DETAILS;
}

export interface IresetOrderError {
  type: typeof RESET_ORDER_ERROR;
}

export interface IPostOrderRequest {
  type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccess {
  type: typeof POST_ORDER_SUCCESS;
  orderNumber: number;
}

export interface IPostOrderFailed {
  type: typeof POST_ORDER_FAILED;
}

export type TOrderActions =
| IСloseOrderModal
| IresetOrderError
| IPostOrderRequest
| IPostOrderSuccess
| IPostOrderFailed;
