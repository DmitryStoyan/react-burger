import { createSlice } from '@reduxjs/toolkit';
import { getIngredients, sendOrder } from '../actions/ingredients'

export const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  currentTab: 'buns',

  cart: [

  ],


  ingredient: {},

  order: null,
  orderRequest: false,
  orderFailed: false,
}


const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    closeOrderModal(state) {
      state.order = null
    },
    addIngredient(state, action) {
      if (action.payload.type === 'bun') {
        const index = state.cart.findIndex(bun => bun.type === 'bun')
        index !== -1
          ?
          state.cart.splice(index, 1, action.payload)
          :
          state.cart.push(action.payload)
      } else {
        state.cart.push(action.payload)
      }
    },
    deleteIngredient(state, action) {
      const index = state.cart.findIndex(item => item.uid === action.payload)
      state.cart.splice(index, 1)
    },
    sortCart(state, action) {
      const { hoverIndex, dragIndex } = action.payload
      const dragItem = state.cart[dragIndex]
      if (dragItem) {
        const prevItem = state.cart.splice(hoverIndex, 1, dragItem)
        state.cart.splice(dragIndex, 1, prevItem[0])
      }
    },
    swithTab(state, action) {
      state.currentTab = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.ingredientsRequest = true;
        state.ingredientsFailed = false;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredientsRequest = false;
        state.ingredientsFailed = false;
        state.ingredients = action.payload
      })
      .addCase(getIngredients.rejected, (state) => {
        state.ingredientsRequest = false;
        state.ingredientsFailed = true;
      })
      .addCase(sendOrder.pending, (state) => {
        state.orderRequest = true;
        state.orderFailed = false;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.orderFailed = false;
        state.order = action.payload
      })
      .addCase(sendOrder.rejected, (state) => {
        state.orderRequest = false;
        state.orderFailed = true;
      })
  },
});

const { actions, reducer } = ingredientsSlice;
export const { closeOrderModal, addIngredient, deleteIngredient, sortCart, swithTab } = actions;

export default reducer;
