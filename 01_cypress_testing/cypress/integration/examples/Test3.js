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
  });
});
