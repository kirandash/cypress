// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My First Test suite", () => {
  it("My First Test case", () => {
    // visit url
    cy.visit(Cypress.env("url") + "/seleniumPractise/#/");

    // type text in search input
    cy.get(".search-keyword").type("ca");

    // wait for results to load
    cy.wait(2000); // wait for product to appear after search

    // check if total results are 4
    cy.get(".product:visible").should("have.length", 4); // will look for entire page
    // Parent child chaining
    // limiting target scope so it does not have to search in whole DOM but just the .products selector
    cy.get(".products").find(".product").should("have.length", 4);

    // click add to cart on 3rd product
    cy.get(".products")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("console log after add to cart");
      });
    // alternate not recommended since the html structure might change in future - and hard to understand
    // better to use class name and text based selector like .find and .contains
    cy.get(":nth-child(3) > .product-action > button").click();

    // alternate with .each method so that code is not dependent on index like eq(2)
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });

    // cypress does not resolve commands as promise when we assign it to a variable
    // only plain commands are resolved
    // so when we assign to variable, we must manually mention .then method to resolve
    // const logo = cy.get(".brand");
    // cy.log(logo.text());
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });
    // .text() won't work directly since text is a jQuery command and not available in Cypress
    // cy.log(cy.get(".brand").text());

    // Aliasing
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);

    cy.log("CY Log");
    console.log("Console Log");

    // assert if logo is displayed correctly
    cy.get(".brand").should("have.text", "GREENKART");
  });
});
