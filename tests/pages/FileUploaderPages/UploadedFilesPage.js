import BasePage from "#framework/ui/page/BasePage.js";
import { Label } from '#framework/ui/elements/index.js';

export default class UploadedFilesPage extends BasePage {
  // Implement Page Object
  constructor(page){
    super(new Label(page.getByRole('heading', { name: 'File Uploaded!' })), 'Uploaded Files Page');
    this.fileName = new Label(page.getByText('test.txt', { exact: true }))
  }
  async getFileMessage() {
    return this.fileName.getText();
  }
}
