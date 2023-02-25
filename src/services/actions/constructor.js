import { v4 as uuidv4 } from 'uuid';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const RESET = 'RESET';
export const CHANGE_ORDER = 'CHANGE_ORDER';

// dnd
export function addItem(item) {
  return {
    type: ADD,
    item: {
      ...item,
      uId: uuidv4(),
    },
  };
}

export function removeItem(item) {
  return {
    type: DELETE,
    item,
  };
}

export function resetConstructor() {
  return {
    type: RESET,
  };
}

export function changeOrder(dragIndex, hoverIndex) {
  return {
    type: CHANGE_ORDER,
    dragIndex,
    hoverIndex,
  };
}
