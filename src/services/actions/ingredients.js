/* eslint-disable func-names */
import api from '../../utils/api-config';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const RESET_INGREDIENTS_ERROR_STATUS = 'RESET_INGREDIENTS_ERROR_STATUS';

export function resetIngredientsError() {
  return {
    type: RESET_INGREDIENTS_ERROR_STATUS,
  };
}

export function getIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    api.takeIngredients()
      .then((res) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredients: res.data });
      })
      .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}
