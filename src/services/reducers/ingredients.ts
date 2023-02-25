import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  RESET_INGREDIENTS_ERROR_STATUS,
} from '../constants/export';

import type { IIngredientsState, TIngredientsActions } from '../types/export';

const $initialState: IIngredientsState = {
  ingredientsArray: [],
  ingredientsRequest: false,
  ingredientsRequestFailed: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const ingredientsReducer = (state = $initialState, action: TIngredientsActions): IIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequestFailed: false,
        ingredientsRequest: false,
        ingredientsArray: action.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequestFailed: true,
        ingredientsRequest: false,
      };
    }
    case RESET_INGREDIENTS_ERROR_STATUS: {
      return {
        ...state,
        ingredientsRequestFailed: false,
      };
    }
    default: {
      return state;
    }
  }
};
