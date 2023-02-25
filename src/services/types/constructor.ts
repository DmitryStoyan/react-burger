import type {
  ADD, DELETE, RESET, CHANGE_ORDER,
} from '../constants/constructor';
import type { IIngredient } from './data';

export interface IConstructorState {
  bun: IIngredient | null;
  filling: IIngredient[];
  ingredientIds: string[];
  totalPrice: number;
}

export interface IAddItemAction {
  type: typeof ADD;
  item: IIngredient;
}

export interface IRemoveItemAction {
  type: typeof DELETE;
  item: IIngredient;
}

export interface IResetConstructorAction {
  type: typeof RESET;
}

export interface IChangeOrderIngredientAction {
  type: typeof CHANGE_ORDER;
  dragIndex: number;
  hoverIndex: number;
}

export type TConstructorActions =
  | IAddItemAction
  | IRemoveItemAction
  | IResetConstructorAction
  | IChangeOrderIngredientAction;
