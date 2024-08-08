class ValidationPage {
  /**
   * Enters the first name into the first name input field.
   * - Finds the first name input field by its ID.
   * - Types "Test123" into the input field.
   */
  enterFirstname() {
    cy.get("#RegisterForm-FirstName").type("Test123");
  }

  /**
   * Enters the last name into the last name input field.
   * - Finds the last name input field by its ID.
   * - Types "Test321" into the input field.
   */
  enterLastname() {
    cy.get("#RegisterForm-LastName").type("Test321");
  }

  /**
   * Enters the email into the email input field.
   * - Finds the email input field by its ID.
   * - Types "test@test123.com" into the input field.
   */
  enterEmail() {
    cy.get("#RegisterForm-email").type("test@test123.com");
  }

  /**
   * Enters the password into the password input field.
   * - Finds the password input field by its ID.
   * - Types "Pass123" into the input field.
   */
  enterPassword() {
    cy.get("#RegisterForm-password").type("Pass123");
  }

  /**
   * Clicks the create button.
   * - Finds the create button by its XPath.
   * - Clicks the button.
   */

  clickCreateButton() {
    cy.xpath("//button[contains(text(),'Create')]").click();
  }

  /**
   * Enters a valid email into the sign-in email input field.
   * - Finds the sign-in email input field by its ID.
   * - Types "test@test123.com" into the input field.
   */
  enterValidSigninEmail() {
    cy.get("#CustomerEmail").type("test@test123.com");
  }

  /**
   * Enters a valid password into the sign-in password input field.
   * - Finds the sign-in password input field by its ID.
   * - Types "Pass123" into the input field.
   */

  enterValidSigninPass() {
    cy.get("#CustomerPassword").type("Pass123");
  }

  /**
   * Enters an invalid email into the sign-in email input field.
   * - Finds the sign-in email input field by its ID.
   * - Types "t" into the input field.
   */
  enterInvalidSigninEmail() {
    cy.get("#CustomerEmail").type("t");
  }

  /**
   * Enters an invalid password into the sign-in password input field.
   * - Finds the sign-in password input field by its ID.
   * - Types "te" into the input field.
   */
  enterInvalidSigninPass() {
    cy.get("#CustomerPassword").type("te");
  }

  /**
   * Clicks the sign-in button.
   * - Finds the sign-in button by its XPath.
   * - Clicks the button.
   */
  clickSigninButton() {
    cy.xpath("//button[contains(text(),'Sign in')]").click();
  }

  /**
   * Asserts that the login was successful by checking the URL.
   * - Ensures the URL includes "/account".
   */
  assertValidLogin() {
    cy.get('.customer account').should("be.visible");
  }

  /**
   * Asserts that the login failed by checking for an error message.
   * - Finds the error message element by its XPath.
   * - Ensures the error message is visible.
   * - Asserts that the error message contains "Invalid username or password".
   */
  assertInvalidLogin() {
    cy.xpath('//div[@class="errors"]').should("be.visible");
    cy.get('//div[@class="errors"]').should(
      "contain",
      "Invalid username or password"
    );
  }

  assertInvalidSignupBlank() {
    cy.xpath('//div[@class="errors"]').should("be.visible");
    cy.get('//div[@class="errors"]').should(
      "contain",
      "Password can't be blank ",
      "Email can't be blank "
    );
  }
}

export default ValidationPage;
