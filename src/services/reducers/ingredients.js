import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  RESET_INGREDIENTS_ERROR_STATUS,
} from '../actions/ingredients';

const $initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsRequestFailed: false,
};

// eslint-disable-next-line default-param-last
export const ingredientsReducer = (state = $initialState, action) => {
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
        ingredients: action.ingredients,
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
