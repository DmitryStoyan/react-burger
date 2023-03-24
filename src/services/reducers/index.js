import { combineReducers } from 'redux';

import { constructorReducer } from './constructor';
import { ingredientsReducer } from './ingredients';
import { ingredientReducer } from './ingredient';
import { orderReducer } from './order';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  ingredient: ingredientReducer,
  order: orderReducer,
  userData: userReducer,
});
