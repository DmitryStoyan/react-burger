/* eslint-disable func-names */
import api from '../../utils/api-config';
import {
  RESET_INGREDIENTS_ERROR_STATUS, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED,
} from '../constants/ingredients';

import type {
  IGetIngredientsFailed, IGetIngredientsRequest, IGetIngredientsSuccess, IResetIngredientsError, IIngredientsResponse, AppDispatch,
} from '../types/export';

export function resetIngredientsError(): IResetIngredientsError {
  return {
    type: RESET_INGREDIENTS_ERROR_STATUS,
  };
}

export function getIngredientsSuccess(res: IIngredientsResponse): IGetIngredientsSuccess {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: res.data,
  };
}

export function getIngredientsRequest(): IGetIngredientsRequest {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
}

export function getIngredientsFailed(): IGetIngredientsFailed {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
}

export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    api.takeIngredients()
      .then((res) => {
        dispatch(getIngredientsSuccess(res));
      })
      .catch(() => dispatch(getIngredientsFailed()));
  };
}
