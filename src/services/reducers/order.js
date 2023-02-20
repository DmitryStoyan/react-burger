import {
  POST_ORDER_FAILED,
  POST_ORDER_SUCCESS,
  POST_ORDER_REQUEST,
  CLOSE_ORDER_DETAILS,
  RESET_ORDER_ERROR,
} from '../actions/order';

const $initialState = {
  orderNumber: null,
  orderRequest: false,
  orderRequestFailed: false,
};

// eslint-disable-next-line default-param-last
export const orderReducer = (state = $initialState, action) => {
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
