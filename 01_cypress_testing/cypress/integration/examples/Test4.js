// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Fourth Test suite", () => {
  it("My Fourth Test case", () => {
    // visit url
    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    // 1. Auto handling of pop ups
    cy.get("#alertbtn").click();
    cy.get("[value='Confirm']").click();
    // window:alert
    cy.on("window:alert", (str) => {
      // Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    // window:confirm
    cy.on("window:confirm", (str) => {
      // Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    // 7.2 Handling Child tab
    // (invoke - cypress, removeAttr - jQuery)
    cy.get("#opentab").invoke("removeAttr", "target").click();

    // 7.3 Navigating browser controls using Cypress
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
  });
});
