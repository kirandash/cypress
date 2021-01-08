// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My First Test suite", () => {
  it("My First Test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
  });
});
