// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Third Test suite", () => {
  it("My Third Test case", () => {
    // visit url
    cy.visit(Cypress.env("url") + "/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // 1. Run test on all checkboxes - check 2nd and 3rd checkbox
    cy.get("input[type='checkbox']").check(["option2", "option3"]);

    // 2. static dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // 3. dynamic dropdown - viz bootstrap dropdown (not conventional select and option but ul li and div)
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });

    // assertion
    cy.get("#autocomplete").should("have.value", "India");

    // 4. Handling visible and invisible elements using assertions in Cypress
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // radio buttons
    cy.get("[value='radio2']").check().should("be.checked");
  });
});
