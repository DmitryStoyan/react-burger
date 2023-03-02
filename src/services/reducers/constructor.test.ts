import {
  constructorReducer as reducer,
  $initialState as state,
} from "./constructor";
import { addItem, removeItem } from "../actions/constructor";
import { ingredientMain } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("constructor reducer test", () => {
  it("should handle set ingredient", () => {
    expect(reducer(state, addItem(ingredientMain))).toEqual({
      bun: null,
      filling: [ingredientMain],
      ingredientIds: [ingredientMain._id],
      totalPrice: ingredientMain.price,
    });
  });
  it("should return the initial state if delete ingredient", () => {
    expect(
      reducer(
        {
          bun: null,
          filling: [ingredientMain],
          ingredientIds: [ingredientMain._id],
          totalPrice: ingredientMain.price,
        },
        removeItem(ingredientMain)
      )
    ).toEqual(state);
  });
});
