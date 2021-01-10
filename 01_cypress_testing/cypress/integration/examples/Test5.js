// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Fifth Test suite", () => {
  it("My Fifth Test case", () => {
    // visit url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // 7.4 Handling Web Tables
    // loop through all 2nd td
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        // next can only be applied on get command
        // text can not be applied on next since text is a jquery method
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
