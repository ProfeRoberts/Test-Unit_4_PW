// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import FileDownloadPage from './pages/FileDownloadPage.js';
import MainPage from './pages/MainPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import FileUtils from '#framework/utils/FileUtils.js';

test('Check that file downloaded', async ({ customBrowser: browser }) => {
  // Implement test case
  const testData = ConfigReader.getTestData();
  const mainPage = new MainPage(browser.page);
  await mainPage.clickNavigationLink("File Download");

  const fileDownloadPage = new FileDownloadPage(browser.page);
  expect(await fileDownloadPage.isFileLabelDisplayed(testData.downloadFileName)).toBe(true);

  const filePath = await browser.downloadAndSave(
    () => fileDownloadPage.clickDownloadFile(testData.downloadFileName), // Pass the page object action as a callback
    testData.downloadFileName                         // Desired filename
  );


  expect(await FileUtils.isFileExists(filePath)).toBe(true);
});
