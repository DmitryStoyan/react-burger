/* eslint-disable func-names */
import api from '../../utils/api-config';
import {
  CLOSE_ORDER_DETAILS, RESET_ORDER_ERROR, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FAILED,
} from '../constants/order';

import type { AppThunk, AppDispatch } from '../types';
import type { IOrderResponse } from '../types/api';
import type {
  IPostOrderFailed, IPostOrderRequest, IPostOrderSuccess, IresetOrderError, IСloseOrderModal,
} from '../types/export';

export function closeOrderModal(): IСloseOrderModal {
  return {
    type: CLOSE_ORDER_DETAILS,
  };
}

export function resetOrderError(): IresetOrderError {
  return {
    type: RESET_ORDER_ERROR,
  };
}

export function postOrder(): IPostOrderRequest {
  return { type: POST_ORDER_REQUEST };
}

export function postOrderSuccess(res: IOrderResponse): IPostOrderSuccess {
  return {
    type: POST_ORDER_SUCCESS,
    orderNumber: res.order.number,
  };
}

export function postOrderFailed(): IPostOrderFailed {
  return {
    type: POST_ORDER_FAILED,
  };
}

export const postOrderRequest: AppThunk = (accessToken: string, order: string[]) => function (dispatch: AppDispatch) {
  dispatch(postOrder());
  api.postOrder(accessToken, order)
    .then((res) => dispatch(postOrderSuccess(res)))
    .catch(() => dispatch(postOrderFailed()));
};
