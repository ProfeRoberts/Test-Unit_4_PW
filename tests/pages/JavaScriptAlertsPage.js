import BasePage from "#framework/ui/page/BasePage.js";
import { Button, Label } from '#framework/ui/elements/index.js';

export default class JavaScriptAlertsPage extends BasePage {
  constructor(page) {
    super(new Label(page.getByRole('heading', { name: 'JavaScript Alerts' }), 'JavaScript Alerts page unique element'), 'JavaScript Alerts Page');
    // Add elements to interact with
    this.forJSAlertButton = new Button(page.getByRole('button', { name: 'Click for JS Alert' }), 'Click for JS Alert button');
    this.result = new Label(page.locator('#result'), 'Success message');
  }

  async clickForJSAlertButton() {
    await this.forJSAlertButton.click();
  }

  async getResultText() {
    return await this.result.getText();
  }
}
