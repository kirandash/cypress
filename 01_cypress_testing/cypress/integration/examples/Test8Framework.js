// To get auto completion from cypress
/// <reference types="Cypress" />

describe("My Eighth Test suite", () => {
  before(function () {
    // runs once before all tests in the block
    // load data from example json
    cy.fixture("example.json").then(function (data) {
      // this will point to whole class and available everywhere
      this.data = data;
    });
  });

  it("My First Test case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    cy.get("select").select(this.data.gender);
    // checking if two way bound data displays data correctly
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );
    // check min length
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      2
    );
    // check if radio btn is disabled or not
    cy.get("#inlineRadio3").should("be.disabled");
  });
});
