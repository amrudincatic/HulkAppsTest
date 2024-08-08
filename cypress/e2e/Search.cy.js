import NavigationPage from "./pages/NavigationPage";

// Instantiate the page object
const navigationPage = new NavigationPage();

describe("Search", () => {
  // Before each test, log in to the application
  beforeEach(() => {
    cy.FirstLogin();
  });

  /**
   * Test Case: TC015
   * Steps:
   *  - Visit the homepage.
   *  - Type "14k Interlinked Earrings" into the search input field.
   *  - Click the search button.
   *  - Assert that the URL includes "/search".
   *  - Assert that the search results contain the expected product.
   */
  it("TC015 - Should display search results for a valid query", () => {
    navigationPage.visitHomePage();
    cy.get(".header__search").type("14k Interlinked Earrings");
    cy.get('button.search__button.field__button[aria-label="Search"]').click();
    cy.url().should("include", "/search");
    cy.get("div.card-wrapper")
      .should("be.visible")
      .within(() => {
        cy.get("h3.card-information__text.h5").should(
          "contain.text",
          "14k Interlinked Earrings"
        );
        cy.get("div.price")
          .should("be.visible")
          .and("contain.text", "Rs. 329.00");
        cy.get('img[alt="14k Interlinked Earrings"]').should("be.visible");
      });
  });

  /**
   * Test Case: TC016
   * Steps:
   *  - Visit the homepage.
   *  - Type "Kisobran" into the search input field.
   *  - Click the search button.
   *  - Assert that the URL includes "/search".
   *  - Assert that the no results found message is displayed.
   */
  it("TC016 - Should display a message for no search results", () => {
    navigationPage.visitHomePage();
    cy.get(".header__search").type("Kisobran");
    cy.get('button.search__button.field__button[aria-label="Search"]').click();
    cy.url().should("include", "/search");
    cy.get('p[role="status"]')
      .should("be.visible")
      .and(
        "contain.text",
        "No results found for “Kisobran”. Check the spelling or use a different word or phrase."
      );
  });

  /**
   * Test Case: TC017
   * Steps:
   *  - Visit the homepage.
   *  - Type "18k" into the search input field.
   *  - Assert that the search suggestions are visible.
   */
  it("TC017 - Should display suggestions as user types", () => {
    navigationPage.visitHomePage();
    cy.get(".header__search").type("18k");
    cy.get("#predictive-search-results").should("be.visible");
  });

  /**
   * Test Case: TC018
   * Steps:
   *  - Visit the homepage.
   *  - Assert that the search input field is visible.
   */
  it("TC018 - Should have a search input field on the home page", () => {
    navigationPage.visitHomePage();
    cy.get(".header__search").should("be.visible");
  });

  /**
   * Test Case: TC019
   * Steps:
   *  - Visit the homepage.
   *  - Type "!@#$%^&*()" into the search input field.
   *  - Click the search button.
   *  - Assert that the URL includes "/search".
   *  - Assert that the no results found message is displayed for the special characters.
   */
  it.only("TC019 - Should accept special characters in the search input field", () => {
    navigationPage.visitHomePage();
    cy.get(".header__search").type("!@#$%^&*()");
    cy.get('button.search__button.field__button[aria-label="Search"]').click();
    cy.url().should("include", "/search");
    cy.get('p[role="status"]')
      .should("be.visible")
      .and(
        "contain.text",
        'No results found for "!@#$%^&*()". Check the spelling or use a different word or phrase.'
      );
  });
});
