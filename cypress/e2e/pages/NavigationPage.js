class NavigationPage {
  /**
   * Navigates to the home page.
   * - Visits the URL for the home page.
   */
  visitHomePage() {
    cy.visit("https://qa-practical-test.myshopify.com");
  }

  /**
   * Asserts that the welcome message is visible on the home page.
   * - Finds the announcement bar by its ID.
   * - Ensures the announcement bar is visible.
   * - Asserts that the announcement bar contains the text "Welcome to our store".
   */
  assertWelcomeMessage() {
    cy.get("#shopify-section-announcement-bar")
      .should("be.visible")
      .and("contain.text", "Welcome to our store");
  }

  /**
   * Navigates to the form builder page.
   * - Visits the URL for the form builder page.
   */
  visitFormBuilderPage() {
    cy.visit("https://qa-practical-test.myshopify.com/pages/form-builder");
  }

  /**
   * Asserts that the current URL includes the path for the form builder page.
   * - Ensures the current URL includes "/pages/form-builder".
   */
  assertFormBuilderPage() {
    cy.url().should("include", "/pages/form-builder");
  }

  /**
   * Navigates to the signup page.
   * - Visits the URL for the signup page.
   */
  visitSignUpPage() {
    cy.visit("https://qa-practical-test.myshopify.com/account/register");
  }

  /**
   * Navigates to the login page.
   * - Visits the URL for the login page.
   */
  visitLoginPage() {
    cy.visit("https://qa-practical-test.myshopify.com/account/login");
  }
}

export default NavigationPage;
