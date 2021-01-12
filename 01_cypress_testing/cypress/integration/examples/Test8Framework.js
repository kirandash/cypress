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
  });
});
