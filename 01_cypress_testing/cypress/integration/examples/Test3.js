// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Third Test suite", () => {
  it("My Third Test case", () => {
    // visit url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // Run test on all checkboxes - check 2nd and 3rd checkbox
    cy.get("input[type='checkbox']").check(["option2", "option3"]);
  });
});
