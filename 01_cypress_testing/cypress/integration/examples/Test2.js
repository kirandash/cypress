// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Second Test suite", () => {
  it("My Second Test case", () => {
    // visit url
    cy.visit(Cypress.env("url") + "/seleniumPractise/#/");

    // type text in search input
    cy.get(".search-keyword").type("ca");

    // wait for results to load
    cy.wait(2000); // wait for product to appear after search

    // Aliasing
    cy.get(".products").as("productLocator");

    // alternate with .each method so that code is not dependent on index like eq(2)
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.wait(2000);
    cy.contains("Place Order").click();
  });
});
