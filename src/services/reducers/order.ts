import {
  POST_ORDER_FAILED,
  POST_ORDER_SUCCESS,
  POST_ORDER_REQUEST,
  CLOSE_ORDER_DETAILS,
  RESET_ORDER_ERROR,
} from "../constants/export";

import type { IOrderState, TOrderActions } from "../types/export";

export const $initialState: IOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderRequestFailed: false,
  isOrderDetailsOpened: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const orderReducer = (
  state = $initialState,
  action: TOrderActions
): IOrderState => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case POST_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderRequestFailed: true,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderRequestFailed: false,
        orderNumber: action.orderNumber,
        isOrderDetailsOpened: true,
      };
    }
    case CLOSE_ORDER_DETAILS: {
      return {
        ...state,
        isOrderDetailsOpened: false,
        orderNumber: null,
      };
    }
    case RESET_ORDER_ERROR: {
      return {
        ...state,
        orderRequestFailed: false,
      };
    }
    default: {
      return state;
    }
  }
};
