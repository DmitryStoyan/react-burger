import {
  ingredientClass,
  closeButtonClass,
  tabClass,
  burgerConstructorClass,
  burgerConstructorIngredientClass,
} from "../../src/utils/test-constants";

export {};

describe("service is available", function () {
  beforeEach(function () {
    cy.viewport(1920, 1280);
  });

  it("should be available on localhost:3000", function () {
    cy.visit("/");
    cy.contains("Соберите бургер");
  });

  it("should open ingredient details", function () {
    cy.debug();
    cy.get("img").first().click();
    cy.contains("Детали ингредиента");
  });

  // it("should close ingredient details by button", function () {
  //   cy.get(closeButtonClass).click();
  //   cy.visit("/");
  // });

  // it("should tab", function () {
  //   cy.get(tabClass).last().click();
  //   cy.get(tabClass).first().click({ force: true });
  // });

  // it("should scroll", function () {
  //   cy.get("[class^=burger-ingredients_scroll").scrollTo(0, 500);
  //   cy.get(tabClass).last().click();
  // });

  // it("should dragndrop ingredients and set buns", function () {
  //   cy.get(ingredientClass).eq(0).drag(burgerConstructorClass);
  //   cy.get(ingredientClass).eq(4).drag(burgerConstructorClass);
  //   cy.get(ingredientClass).eq(1).drag(burgerConstructorClass);
  //   cy.get(ingredientClass).eq(9).drag(burgerConstructorClass);
  //   cy.get(ingredientClass).eq(4).drag(burgerConstructorClass);
  //   cy.get(ingredientClass).eq(0).drag(burgerConstructorClass);
  // });

  // it("should dragndrop ingredients constructor", function () {
  //   cy.get(burgerConstructorIngredientClass)
  //     .eq(0)
  //     .drag(burgerConstructorIngredientClass);
  //   cy.get(burgerConstructorIngredientClass)
  //     .eq(1)
  //     .drag(burgerConstructorIngredientClass);
  // });

  // it("should delete ingredient from constructor", function () {
  //   cy.get("[class^=constructor-element__action]").eq(2).click();
  //   cy.get("[class^=burger-constructor_scroll]").eq(4).and("not.exist");
  // });

  // it("should open order details", function () {
  //   cy.get("button").contains("Оформить заказ").click();
  // });

  // it("should login", function () {
  //   const email = "polina007@inbox.ru";
  //   const password = "123123";
  //   cy.get("input").first().type(email);
  //   cy.get("input").last().type(password);
  //   cy.get("button").click();
  // });

  // it("should open order modal", function () {
  //   cy.wait(1000).get("button").contains("Оформить заказ").click();
  // });

  // it("should show order number and close modal ", function () {
  //   cy.wait(20000).get("[class^=order-details_title]").and("exist");
  //   cy.get(closeButtonClass).click();
  //   cy.get(burgerConstructorIngredientClass).and("not.exist");
  // });
});
