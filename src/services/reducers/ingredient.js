/* eslint-disable default-param-last */
import { SET_INGREDIENT, CLOSE_INGREDIENT_DETAILS } from '../actions/ingredient';

const $initialState = {
  viewedIngredient: null,
};

export const ingredientReducer = (state = $initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {
        ...state,
        viewedIngredient: action.ingredient,
      };
    case CLOSE_INGREDIENT_DETAILS:
      return {
        ...state,
        isIngredientDetailsOpened: false,
        viewedIngredient: null,
      };
    default:
      return state;
  }
};
