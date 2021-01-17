// To get auto completion from cypress
/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

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
    const homePage = new HomePage();
    const productPage = new ProductPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);

    // 9.3 Validating attribute properties and their behavior with Cypress assertions
    // checking if two way bound data displays data correctly
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    // check min length
    homePage.getEditBox().should("have.attr", "minlength", 2);
    // check if radio btn is disabled or not
    homePage.getEntrepreneur().should("be.disabled");

    // 9.4 Building Customized Cypress commands for reusing the code
    // click on shop link in navbar
    cy.pause();

    // Explicit cypress config for only this test case - starting from this line till the end of all tests in this file
    Cypress.config("defaultCommandTimeout", 100000);
    homePage.getShopTab().click();

    // custom command
    // 10.1 Parametrizing the test data from JSON files using each command
    // loop through all data from fixtures and run custom command on them
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    // cy.selectProduct("Blackberry");
    // cy.selectProduct("Nokia Edge");

    // Product Page
    productPage.getCheckOutButton().click();
  });
});
