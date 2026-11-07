import BasePage from "#framework/ui/page/BasePage.js";
import { Label } from '#framework/ui/elements/index.js';

export default class BasicAuth extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: "Basic Auth" }), 'basic auth page unique element'), 'Basic Auth Page');
    // Add elements to interact with
    this.successMessage = new Label(page.getByText('Congratulations! You must have the proper credentials.', { exact: true }), 'Success message');
  }

  async getSuccessMessage() {
    return this.successMessage.getText();
  }
}
