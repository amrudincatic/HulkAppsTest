# E-Commerce Website Test Automation

## Introduction
This repository contains automated test scripts for the e-commerce website using the Cypress framework. The tests cover login, signup, and search functionality.

## Setup
1. Clone the repository: `git clone https://github.com/amrudincatic/Cypress_HulkApps_AmrudinCatic.git`
2. Navigate to the project directory: `cd repository`
3. Install dependencies: `npm install`

## Running Tests
To run the tests, use the following command:
npx cypress run --spec "cypress/e2e/*.cy.js" -> to run all tests in the e2e folder without visualization of steps

Prerequisites

  Before running Cypress tests, make sure you have the following installed on your system:
Node.js (version 12 or later)
npm (Node package manager, which comes with Node.js)
Cypress (installed in your project)

  Installing Cypress
If Cypress is not installed in your project, you can install it using npm. Run the following command in your project directory:
npm install cypress --save-dev

  Opening Cypress Test Runner
To open the Cypress Test Runner, use the following command:
npx cypress open
This will open the Cypress Test Runner GUI, where you can see and run all your test files interactively.

  Running Cypress Tests from the Command Line
You can also run Cypress tests directly from the command line. This is useful for continuous integration (CI) environments or running bulk tests.
To run all tests, use the following command:
npx cypress run

  Running in a Specific Browser
Use npx cypress run --browser chrome to run tests in a specific browser.

  Running specific folder
npx cypress run --spec "cypress/e2e/*.cy.js" to run all tests in the e2e folder




