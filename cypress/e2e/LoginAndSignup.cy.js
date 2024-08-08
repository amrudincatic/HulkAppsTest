import NavigationPage from "./pages/NavigationPage";
import FormBuilderPage from "./pages/FormBuilderPage";
import ValidationPage from "./pages/ValidationPage";

// Instantiate the page objects
const navigationPage = new NavigationPage();
const formBuilderPage = new FormBuilderPage();
const validationPage = new ValidationPage();

describe("Validation", () => {
  // Before each test, log in and navigate to the form builder page
  beforeEach(() => {
    cy.FirstLogin();
    navigationPage.visitFormBuilderPage();
  });

  /**
   * Test Case: TC003
   * Steps:
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredEmail is requiredGive Ratings is required" is displayed.
   */
  it("TC003 - Should validate that all required fields are mandatory", () => {
    formBuilderPage.clickSubmitButton();
    const errorMessage =
      "×Last Name is requiredEmail is requiredGive Ratings is required";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC004
   * Steps:
   *  - Enter an invalid email.
   *  - Click the submit button.
   *  - Assert that the error message "Provide valid email format" is displayed.
   */
  it("TC004 - Should validate email field with invalid email", () => {
    formBuilderPage.enterEmail("invalidmail");
    formBuilderPage.clickSubmitButton();
    const errorMessage = "Provide valid email format";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC005
   * Steps:
   *  - Enter a valid email.
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredGive Ratings is required" is displayed.
   */
  it("TC005 - Should validate email field with valid email", () => {
    formBuilderPage.enterEmail("test@test.com");
    formBuilderPage.clickSubmitButton();
    const errorMessage = "×Last Name is requiredGive Ratings is required";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC007
   * Steps:
   *  - Enter non-numeric input into the give rating field.
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredEmail is requiredGive Ratings is required" is displayed.
   */
  it("TC007 - Should not accept non-numeric input in numeric fields", () => {
    formBuilderPage.enterGiveRating("qwertz");
    formBuilderPage.clickSubmitButton();
    const errorMessage =
      "×Last Name is requiredEmail is requiredGive Ratings is required";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC008
   * Steps:
   *  - Enter numeric input (9) into the give rating field.
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredEmail is required" is displayed.
   */
  it("TC008 - Should accept numeric input in numeric fields (1-10)", () => {
    formBuilderPage.enterGiveRating("9");
    formBuilderPage.clickSubmitButton();
    const errorMessage = "×Last Name is requiredEmail is required";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC009
   * Steps:
   *  - Enter a rating greater than 10 into the give rating field.
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredEmail is requiredGive Ratings must be less than 10" is displayed.
   */
  it("TC009 - Should validate that Give Ratings must be less than 10", () => {
    formBuilderPage.enterGiveRating("11");
    formBuilderPage.clickSubmitButton();
    const errorMessage =
      "×Last Name is requiredEmail is requiredGive Ratings must be less than 10";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC010
   * Steps:
   *  - Enter special characters into the give rating field.
   *  - Click the submit button.
   *  - Assert that the error message "Last Name is requiredEmail is requiredGive Ratings is required" is displayed.
   */
  it("TC010 - Should validate form submission with special characters", () => {
    formBuilderPage.enterGiveRating("!@#$%^&*()");
    formBuilderPage.clickSubmitButton();
    const errorMessage =
      "×Last Name is requiredEmail is requiredGive Ratings is required";
    formBuilderPage.assertErrorMessage(errorMessage);
  });

  /**
   * Test Case: TC011
   * Steps:
   *  - Navigate to the signup page.
   *  - Enter valid first name, last name, email, and password.
   *  - Click the create button.
   *  - Assert that the welcome message is displayed.
   */
  it("TC011 - Should signup successfully with valid information", () => {
    navigationPage.visitSignUpPage();

    validationPage.enterFirstname();
    validationPage.enterLastname();
    validationPage.enterEmail();
    validationPage.enterPassword();
    validationPage.clickCreateButton;
    // assert
    navigationPage.assertValidLogin();
  });

  /**
   * Test Case: TC013
   * Description: Should login successfully with valid credentials.
   * Steps:
   *  - Navigate to the login page.
   *  - Enter valid email and password.
   *  - Click the sign-in button.
   *  - Assert that the login was successful by checking the URL.
   */
  it("TC013 - Should login successfully with valid credentials", () => {
    navigationPage.visitLoginPage();
    validationPage.enterValidSigninEmail();
    validationPage.enterValidSigninPass();
    validationPage.clickSigninButton();
    validationPage.assertValidLogin();
  });

  /**
   * Test Case: TC014
   * Description: Should display error for invalid credentials.
   * Steps:
   *  - Navigate to the login page.
   *  - Enter invalid email and password.
   *  - Click the sign-in button.
   *  - Assert that the login failed by checking for an error message.
   */
  it("TC014 - Should display error for invalid credentials", () => {
    navigationPage.visitLoginPage();
    validationPage.enterInvalidSigninEmail();
    validationPage.enterInvalidSigninPass();
    validationPage.clickSigninButton();
    validationPage.assertInvalidLogin();
  });
});
