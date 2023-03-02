import {
  ingredientsReducer as reducer,
  $initialState as state,
} from "./ingredients";
import {
  resetIngredientsError,
  getIngredientsSuccess,
  getIngredientsRequest,
  getIngredientsFailed,
} from "../actions/ingredients";
import { ingredients } from "../../utils/test-constants";
import { expect } from "@jest/globals";

describe("get ingredients reducer test", () => {
  it("should handle get burger ingredients success", () => {
    expect(
      reducer(
        state,
        getIngredientsSuccess({ data: ingredients, success: true })
      )
    ).toEqual({
      ingredientsRequestFailed: false,
      ingredientsRequest: false,
      ingredientsArray: ingredients,
    });
  });
  it("should change ingredientRequest when make request", () => {
    expect(reducer(state, getIngredientsRequest())).toEqual({
      ingredientsRequestFailed: false,
      ingredientsRequest: true,
      ingredientsArray: [],
    });
  });
  it("should change getIngredientsFailed when request failed", () => {
    expect(reducer(state, getIngredientsFailed())).toEqual({
      ingredientsRequestFailed: true,
      ingredientsRequest: false,
      ingredientsArray: [],
    });
  });
  it("should change resetIngredientsError when make new request", () => {
    expect(reducer(state, resetIngredientsError())).toEqual({
      ingredientsRequestFailed: false,
      ingredientsRequest: false,
      ingredientsArray: [],
    });
  });
});
