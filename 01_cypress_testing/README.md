# Cypress - Modern Automation Testing from Scratch + Framework

## 1. Intro

### 1.1 What is Cypress and Why it is future of Automation

- **What is Cypress?**
  - A next gen FE automation testing tool built for the modern web apps.
- How Cypress is unique from other automation tools?
  - It **automatically waits** for commands and assertions before moving on. No more async hell.
    - Flake resistant
    - ex: intelligent enough to check the state of button before clicking viz disabled or not and wait for it to be enabled. has to be mentioned manually in selenium to wait
    - ex: if a checkbox is under a popup - cypress will close the pop up and then click on the checkbox
  - Ability to test edge Testcases by **mocking the server response**.
    - Ex: can make normal API call. and can alter the response as per your requirement. viz inject fake response in case the network is down.
  - takes **screenshots** as ur tests run. can hover over commands in the **command log** to see exactly what happened at each step
    - for other testing tools, we need to mention manually for taking screenshot
  - bcoz of it's architecture design, it delivers **fast, consistent and reliable** test execution compared to other automation tools.
  - view **videos of your entire test execution** when run from the Cypress Dashboard.
- **About Code:**
  - Cypress built on nodejs and comes packaged as npm module
  - uses JS for writing tests. 90% coding can be done using Cypress built-in commands
  - Bundles with jQuery and inherits many of jQuery methods for UI component identification
- [npm trend - cypress vs protractor](https://www.npmtrends.com/cypress-vs-protractor)

### 1.2 Cypress architecture and it's benefits

- **Cypress architecture**:
  - Most testing tools (like selenium) operate by running outside of the browser and execute remote commands across the network. But cypress engine directly operates inside the browser.
    - In selenium: code is wrapped and sent to browser driver which will then scan and send commands to real browse
  - In other words, it is browser that is executing our test code
  - It enables Cypress to listen and modify the browser behavior at run time by manipulating DOM and altering Network requests and responses on the fly
  - Cypress opens door to new kind of testing with having ultimate control over your application (Front and back)
- **Cypress browser support**:
  - Chrome
  - Electron (same engine as chrome but optimized and light weighted)
  - Firefox and IE

## 2. Cypress Installation and Project Setup

### 2.1 Installation

- `npm init`: generate package.json file
- Install [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)
  - `npm install cypress --save-dev`

## 3. Intro to Cypress test runner and Command line features

### 3.1 What is Cypress Test runner

- Cypress commands must run form cypress .exe file i.e. `node_modules/.bin/cypress`
- Run: `./node_modules/.bin/cypress open`
- Creates `cypress.json` and `cypress/` with the entire framework(fixtures, integration, plugins, support) and sample test cases.
  - other frameworks does not

### 3.2 Build Cypress basic test and run from test runner

- [Doc](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)
- Cypress comes bundled with mocha (describe, it) and chai (expect) for writing test cases
- `cy.visit()`: Visit a URL

### 3.3 Running Cypress tests in Supported Browsers

- Chrome
- Electron (same engine as chrome but optimized and light weighted)
  - High performance and stable
  - Cypress comes with electron by default. No need to install. Other browsers need installation
- Canary (same engine as chrome)
- Firefox and Edge (supported in 4.0)
- To run test on specific browser:
  - `./node_modules/.bin/cypress run --browser firefox`
- To run a specific test file:
  - `npm run cy:run -- --record --spec "cypress/integration/my-spec.js"`
- Note: Through command line: by default cypress always runs in **headless** mode and in Electron browser.
  - Can mention explicitly to use something else otherwise
  - Run tests without opening browser: `./node_modules/.bin/cypress run`
  - Run headed: `./node_modules/.bin/cypress run --headed`
    - Will invoke browser, execute and then close

### 3.4 Cypress project framework structure

- **Fixtures:** data for tests
  - cypress is smart enough to pick data from fixture folder
- **integration**: test cases
- **plugins**: listeners to various cypress emits
  - ex: on browser launch go full screen
  - not much used
- **support**:
  - reusable methods to be available for test cases
  - can create our own folder but then have to import
  - support folder will be imported by default with Cypress
- **cypress.json**:
  - overrides defauly settingss
  - default settings can be checked by opening test runner: `./node_modules/.bin/cypress open` and then clicking on settings tab

## 4. Getting started with Cypress and automation

### 4.1 Cypress locator strategies and how to construct them

- Cypress only supports CSS selectors
- [Demo](https://rahulshettyacademy.com/seleniumPractise/#/)
  - Ex: tagName, className etc
- Can use the Cypress test runner inspector to get CSS selector name

### 4.2 Cypress inbuilt plugin in testrunner to generate locators

- To get auto completion from cypress:
  - `<reference types="Cypress" />`

### 4.3 Basic assertion in writing tests with Cypress

- check products length using `.should` assertion API from chai
- can time travel in test runner
- Cypress is very easy in debugging. No other tool can beat it.
  - we can see what happened on every step with screenshot and error messages in cypress

## 5. Cypress commands and it's asynchronous nature

### 5.1 get and find commands with Cypress

- limiting target scope so it does not have to search in whole DOM but just the .products selector
- using parent child chaining
- `contains`: finds element containing a certain text
