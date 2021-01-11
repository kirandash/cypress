// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Eighth Test suite", () => {
  before(() => {
    // runs once before all tests in the block
  });

  it("My First Test case", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.get("input[name='name']:nth-child(2)").type("Bob");
    cy.get("select").select("Female");
  });
});
