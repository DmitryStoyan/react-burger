import type {
  RESET_INGREDIENTS_ERROR_STATUS, GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED,
} from '../constants/ingredients';
import type { IIngredient } from './data';

export interface IIngredientsState {
  ingredientsArray: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsRequestFailed: boolean;
}

export interface IResetIngredientsError {
  type: typeof RESET_INGREDIENTS_ERROR_STATUS;
}

export interface IGetIngredientsRequest {
  type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  type: typeof GET_INGREDIENTS_SUCCESS;
  ingredients: IIngredient[];
}

export interface IGetIngredientsFailed {
  type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
  | IResetIngredientsError
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;
