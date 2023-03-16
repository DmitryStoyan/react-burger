import { v4 as uuidv4 } from "uuid";

import { ADD, DELETE, RESET, CHANGE_ORDER } from "../constants/constructor";

import type {
  IAddItemAction,
  IRemoveItemAction,
  IResetConstructorAction,
  IChangeOrderIngredientAction,
} from "../types/export";
import type { IIngredient } from "../types/data";

// dnd
export function addItem(item: IIngredient): IAddItemAction {
  return {
    type: ADD,
    item: {
      ...item,
      uId: uuidv4(),
    },
  };
}

export function removeItem(item: IIngredient): IRemoveItemAction {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor(): IResetConstructorAction {
  return {
    type: RESET,
  };
}

export function changeOrder(
  dragIndex: number,
  hoverIndex: number
): IChangeOrderIngredientAction {
  return {
    type: CHANGE_ORDER,
    dragIndex,
    hoverIndex,
  };
}
