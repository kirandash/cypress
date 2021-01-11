// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Sixth Test suite", () => {
  it("My Sixth Test case", () => {
    // visit url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // 7.5 Handling mouse over pop ups
    // invoke (cypress) show(jquery)
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");

    // handling invisible elements
    cy.get("div.mouse-hover-content").invoke("hide");
    // can't click invisible item error
    // cy.contains("Top").click();
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
