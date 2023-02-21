/* eslint-disable func-names */
import api from '../../utils/api-config';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'POST_ORDER_FAILED';
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const RESET_ORDER_ERROR = 'RESET_ORDER_ERROR';

export function closeOrderModal() {
  return {
    type: CLOSE_ORDER_DETAILS,
  };
}

export function resetOrderError() {
  return {
    type: RESET_ORDER_ERROR,
  };
}

export function postOrderRequest(order) {
  return function (dispatch) {
    dispatch({ type: POST_ORDER_REQUEST });
    api.postOrder(order)
      .then((res) => dispatch({ type: POST_ORDER_SUCCESS, orderNumber: res.order.number }))
      .catch(() => dispatch({ type: POST_ORDER_FAILED }));
  };
}
