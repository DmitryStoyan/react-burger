import update from 'immutability-helper';
import {
  ADD, DELETE, RESET, CHANGE_ORDER,
} from '../actions/constructor';

const $initialState = {
  bun: null,
  filling: [],
  ingredientIds: [],
  totalPrice: 0,
};

// eslint-disable-next-line default-param-last
export const constructorReducer = (state = $initialState, action) => {
  switch (action.type) {
    case ADD:
      if (action.item.type === 'bun') {
        if (state.bun) {
          return {
            ...state,
            bun: action.item,
            ingredientIds: [...state.ingredientIds]
              .filter((id) => id !== state.bun._id)
              .concat(action.item._id),
            totalPrice: state.totalPrice - state.bun.price * 2 + action.item.price * 2,
          };
        }
        return {
          ...state,
          bun: action.item,
          ingredientIds: [...state.ingredientIds, action.item._id],
          totalPrice: state.totalPrice + action.item.price * 2,
        };
      }
      return {
        ...state,
        filling: [...state.filling, action.item],
        ingredientIds: [...state.ingredientIds, action.item._id],
        totalPrice: state.totalPrice + action.item.price,
      };

    case DELETE:
      return {
        ...state,
        filling: [...state.filling].filter((item) => item.uId !== action.item.uId),
        ingredientIds: [...state.ingredientIds].filter((id) => id !== action.item._id),
        totalPrice: state.totalPrice - action.item.price,
      };

    case RESET:
      return $initialState;

    case CHANGE_ORDER:
      return {
        ...state,
        filling: update(state.filling, {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, state.filling[action.dragIndex]],
          ],
        }),
      };

    default:
      return state;
  }
};
