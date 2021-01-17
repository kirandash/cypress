// To get auto completion from cypress
/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";

describe("My Eighth Test suite", () => {
  before(function () {
    // runs once before all tests in the block
    // 9.2 Understand how fixture works in driving data
    // load data from example json
    cy.fixture("example.json").then(function (data) {
      // this will point to whole class and available everywhere
      this.data = data;
    });
  });

  it("My First Test case", function () {
    // Create new instance of HomePage object
    const HomePage = new HomePage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    cy.get("select").select(this.data.gender);

    // 9.3 Validating attribute properties and their behavior with Cypress assertions
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

    // 9.4 Building Customized Cypress commands for reusing the code
    // click on shop link in navbar
    cy.pause();
    cy.get(":nth-child(2) > .nav-link").click();

    // custom command
    // 10.1 Parametrizing the test data from JSON files using each command
    // loop through all data from fixtures and run custom command on them
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    // cy.selectProduct("Blackberry");
    // cy.selectProduct("Nokia Edge");
  });
});
