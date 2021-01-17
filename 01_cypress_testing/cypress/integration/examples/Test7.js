// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Seventh Test suite", () => {
  it("My Seventh Test case", () => {
    // visit url
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    // 8.1 Handling Child Windows
    // invoke (cypress) show(jquery)
    // won't work since can't run jQuery method on get
    // cy.get("#opentab").prop("href");
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.log(url);
      cy.visit(url);
    });
  });
});
