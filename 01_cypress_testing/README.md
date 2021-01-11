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

### 5.1 get, find and contains commands with Cypress

- limiting target scope so it does not have to search in whole DOM but just the .products selector
- using parent child chaining
- `contains`: finds element containing a certain text

### 5.2 Grabbing the text for validations using cypress text, each and includes command

- Note: Use [ChroPath](https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo/related?authuser=2) for finding selectors on DOM
- .each, .text, :includes

### 5.3 Cypress async nature and it's promise handling

- [Doc](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html)
- Cypress is **async** in nature and there is no guarantee in sequence of execution, but cypress takes care of it.
  - while selenium is synchronous
- Promise comes with `rejection`, `resolved` and `pending`
- `.then()` method will be executed when promise is resolved
- **Note:** Cypress internally implements promise and then method so the next step is executed only when the first line is finished executing.
- No need to mention .then meethods in Cypress
  - Cypress looks like synchronous like Selenium but lot of code is taken care in backend so that test code doesn't look ugly or noisy.

### 5.4 Understanding the diff b/w jQuery methods and Cypress commands

- cypress does not resolve commands as promise when we assign it to a variable
- only plain commands are resolved
- so when we assign to variable, we must manually mention .then method to resolve
- use `cy.log` to log
- Non cypress commands like `.text()` can not resolve promise by themselves. We need to manually resolve it by then()

### 5.5 Handling async promises with Cypress - alias

1. **Aliasing**

- In cypress declaring a variable to avoid repittion is not a suggested way. Since then we will have to manually mention .then method to resolve
- To fix this we can use `aliasing` from cypress
  - use `as` and `@`

2. **cy.log vs console.log**:

- in selenium logs appear in test driver but since cypress works directly on browser. we can use console.log to print something in broswer console
- `cy.log` will appear in test runner log
- `console.log` will appear in browser console
- **Note:** console.log will log immediately without waiting for cypress commands. Since it is browser related and not test related
- To control execution of console.log: you will have to manually mention it with .then method

### 5.6 Additional Test, CORS error handling and visiting new page

- **Note**:
  - CORS error when visiting one page to another can be suppressed by adding: `chromeWebSecurity` to cypress.json file
  - Try running on electron browser instead of chrome or firefox

## 6. Handling Web Controls using Cypress

### 6.1 How to verify and automate check boxes with Cypress

- [Website](https://rahulshettyacademy.com/AutomationPractice/)
- `.check()` method
- `.should('be.checked')`: use `.be` for behavior check and `.have` for property or value check
- use `.and` to concatenate assertion
- `uncheck`
- `check` with array for controlling more than one checkbox

### 6.2 Handling static dropdowns using select command with Cypress

- `select`

### 6.3 Handling Dynamic dropdowns with each command iteration

### 6.4 Handling visible and invisible elements using assertions in Cypress

- `be.visible`
- `not.be.visible`
- `be.checked` - for radio buttons

## 7. Advance automation to handling Alerts, pop ups, child windows using Cypress, jQuery

### 7.1 How Cypress auto handles Alerts in Web Apps with cy.on and window:alert

- Test4.js
- Cypress auto confirms alerts and pop ups - auto clicks on Ok, No need to mentioin
- Cypress has capability to listen to browser events
- `cy.on`: to manage events
- [Docs](https://docs.cypress.io/api/events/catalog-of-events.html#App-Events)
- `window:alert` is the event which gets fired on alert open
- so we are using this event to get access to that alert
- Note: We won't be able to see the alerts or confirms in cypress test

### 7.2 Handling Child tab with combination of Cypress & jQuery commands

- how to switch to another tab in browser
- Cypress doesn't have any knowledge of switching to other browser tabs. Unlike selenium which allows you to switch
  - bcoz of architecture to not have flaky testing
- **Work around**:
  - Remove target blank so that window opens in same window. So that cypress opens the new url in same tab or window
- How to remove target attribute
  - using `invoke`, a cypress fn to invoke/call `removeattr`, a jquery fn

### 7.3 Navigating browser controls using Cypress

- `go` command: Navigate back or forward to the previous or next URL in the browser’s history.
- [docs](https://docs.cypress.io/api/commands/go.html)
- `url` command: Get the current URL of the page that is currently active.
- [docs](https://docs.cypress.io/api/commands/url.html)

### 7.4 Handling Web Tables with Cypress using each command

- `next`: Get the immediately following sibling of each DOM element within a set of DOM elements.
  - [Docs](https://docs.cypress.io/api/commands/next.html#Syntax)
  - can only be applied on `.get` command

### 7.5 Handling mouse over pop ups using Cypress

- Mouse over events are Not supported by Cypress unlike selenium
  - since mouse over is a flaky behavior
  - in selenium: mouseover sometimes doesn't work correctly and disappears during test
- **Work around**:
  - use jQuery `.show()` method
- Test6.js
- Alternate: clicking invisible items
  - [Force click](https://docs.cypress.io/api/commands/click.html#Options)
- No solution for handling invisible elements in selenium
  - cypress has

## 8. Understand limitations of frames and child windows in Cypress

### 8.1 Handling Child Windows using Cypress with cy.visit

- Cypress can't work on child tabs or child windows
- **Work around**:
  - Instead of clicking btn, copy URL from href attr and load it in same window
  - remove target blank attribute

### 8.2 Limitations of Frames with Cypress

- iFrames,
- oAuth

## 9. Cypress Framework - Part 1 - Fixtures and Custom standards

### 9.1 Agenda of framework topics and starting with test building

- Setting up test hooks
- Data driven testing with fixtures
- Building cypress custom commands
- Parametrize test with Multiple data sets
- Understand and test debugging
- Build Page object Design Patterns for objects
- Configuration changes in cypress.json
- Screenshots and video recording for test
- Exploring Cypress Dashboard
- Understand the Environmental variables of Cypress
- Generate excellent reports for Test execution results
- Integrate Cypress tests with Jenkins CI

1. Hooks:

- From Mocha
- [Docs](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure)
- Ex: `before`, `after`. `beforeEach`, `afterEach`
