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

## 3.
