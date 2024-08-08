import NavigationPage from "./pages/NavigationPage";

// Instantiate the page object
const navigationPage = new NavigationPage();

describe("Navigation", () => {
  // Before each test, log in to the application
  beforeEach(() => {
    cy.FirstLogin();
  });

  /**
   * Test Case: TC001
   * Steps:
   *  - Assert that the welcome message is visible on the homepage.
   */
  it("TC001 - Should navigate to the specified URL and access the website", () => {
    navigationPage.assertWelcomeMessage();
  });

  /**
   * Test Case: TC002
   * Steps:
   *  - Visit the form builder page.
   *  - Assert that the current URL includes the path for the form builder page.
   */
  it.only("TC002 - Should redirect to the form builder page", () => {
    navigationPage.visitFormBuilderPage();
    navigationPage.assertFormBuilderPage();
  });
});
