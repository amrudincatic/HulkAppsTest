class FormBuilderPage {
  /**
   * Retrieves the body of the iframe to enable further interactions with elements inside the iframe.
   * - Gets the iframe element by ID.
   * - Accesses the iframe's document body.
   * - Ensures the body is not empty.
   * - Wraps the body element for further chaining.
   */
  getIframeBody() {
    return cy
      .get("#frame_8Q1zrNOWpYyVd3BKCe2hAA")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  }

  /**
   * Clicks the submit button inside the iframe.
   * - Gets the iframe body.
   * - Finds the submit button by its type and class.
   * - Scrolls the button into view.
   * - Ensures the button is visible.
   * - Clicks the button.
   */
  clickSubmitButton() {
    this.getIframeBody()
      .find('button[type="submit"].btn')
      .contains("Submit")
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  /**
   * Asserts that the specified error message is visible inside the iframe.
   * - Gets the iframe body.
   * - Finds the alert element.
   * - Ensures the alert is visible.
   * - Asserts that the alert contains the specified error message.
   *
   * @param {string} errorMessage - The error message to assert.
   */
  assertErrorMessage(errorMessage) {
    this.getIframeBody()
      .find(".alert")
      .should("be.visible")
      .and("include.text", errorMessage);
  }

  /**
   * Enters the specified email into the email input field inside the iframe.
   * - Gets the iframe body.
   * - Finds the email input field by its ID.
   * - Scrolls the input field into view.
   * - Ensures the input field is visible.
   * - Types the specified email into the input field.
   *
   * @param {string} email - The email to type into the input field.
   */
  enterEmail(email) {
    this.getIframeBody()
      .find("#form_input_2")
      .scrollIntoView()
      .should("be.visible")
      .type(email);
  }

  /**
   * Enters the specified rating into the give rating input field inside the iframe.
   * - Gets the iframe body.
   * - Finds the give rating input field by its ID.
   * - Scrolls the input field into view.
   * - Ensures the input field is visible.
   * - Types the specified rating into the input field.
   *
   * @param {string} rating - The rating to type into the input field.
   */
  enterGiveRating(rating) {
    this.getIframeBody()
      .find("#form_input_6")
      .scrollIntoView()
      .should("be.visible")
      .type(rating);
  }
}

export default FormBuilderPage;
