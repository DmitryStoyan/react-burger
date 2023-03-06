import { tabClass, ingredientClass } from "../../src/utils/test-constants";

describe("service is available", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.viewport(1920, 1280);
  });

  it("should be available on localhost:3000", function () {
    cy.contains("Соберите бургер");
  });

  it("should open ingredient details close ingredient details by button", function () {
    cy.get("img").first().click();
    cy.contains("Детали ингредиента");
    cy.get(".closeButton").click();
  });

  it("should tab", function () {
    cy.get(tabClass).last().click();
    cy.get(tabClass).first().click({ force: true });
  });

  it("should scroll", function () {
    cy.get(".burgerIngredientsScroll").scrollTo(0, 500);
    cy.get(tabClass).last().click();
  });

  it("should dragndrop ingredients and set buns and dragndrop ingredients constructor and delete ingredient from constructor", function () {
    cy.get(".ingredientClass").eq(0).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(1).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(9).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(1).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(9).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(0).drag(".burgerConstructorClass");

    cy.get(".burger-constructor_scroll").eq(4).and("not.exist");

    cy.get(".burgerConstructorIngredientClass")
      .eq(0)
      .drag(".burgerConstructorIngredientClass");
    cy.get(".burgerConstructorIngredientClass")
      .eq(1)
      .drag(".burgerConstructorIngredientClass");

    cy.get("[class^=constructor-element__action]").eq(2).click();
  });

  it("should open order details", function () {
    cy.get(".ingredientClass").eq(0).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(9).drag(".burgerConstructorClass");

    cy.get("button").contains("Оформить заказ").click();
  });

  it("should login", function () {
    cy.get(".ml-2").contains("Личный кабинет").click();
    const email = "test111@yandex.ru";
    const password = "Aa1234567890";
    cy.get("input").first().type(email);
    cy.get("input").last().type(password);
    cy.get("button").click();
  });

  it("should open order modal", function () {
    cy.get(".ml-2").contains("Личный кабинет").click();
    const email = "test111@yandex.ru";
    const password = "Aa1234567890";
    cy.get("input").first().type(email);
    cy.get("input").last().type(password);
    cy.get("button").click();

    cy.get(".ml-2").contains("Конструктор").click();

    cy.get(".ingredientClass").eq(0).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(9).drag(".burgerConstructorClass");

    cy.wait(1000).get("button").contains("Оформить заказ").click();
  });

  it("should show order number and close modal", function () {
    cy.get(".ml-2").contains("Личный кабинет").click();
    const email = "test111@yandex.ru";
    const password = "Aa1234567890";
    cy.get("input").first().type(email);
    cy.get("input").last().type(password);
    cy.get("button").click();

    cy.get(".ml-2").contains("Конструктор").click();

    cy.get(".ingredientClass").eq(0).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(4).drag(".burgerConstructorClass");
    cy.get(".ingredientClass").eq(9).drag(".burgerConstructorClass");

    cy.wait(1000).get("button").contains("Оформить заказ").click();

    cy.wait(20000).get(".order-number").and("exist");
    cy.get(".closeButton").click();
  });
});
