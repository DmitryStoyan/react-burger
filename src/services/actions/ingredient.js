// тип action
export const SET_INGREDIENT = 'SET_INGREDIENT';
export const CLOSE_INGREDIENT_DETAILS = 'CLOSE_INGREDIENT_DETAILS';

// action creator возвращающий action(object с полем type и какими-либо данными)
export function setCurrentIngredient(item) {
  return {
    type: SET_INGREDIENT,
    ingredient: item,
  };
}

export function closeIngredientModal() {
  return {
    type: CLOSE_INGREDIENT_DETAILS,
  };
}
