// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import NewWindowPage from './pages/MultipleWindowsPages/NewWindowPage.js';
import OpenNewWindowPage from './pages/MultipleWindowsPages/OpenNewWindowPage.js';

const newWindowText = 'New Window';

test('interact with New Window', async ({ customBrowser: browser }) => {
  // Implement test case
  const mainPage = new MainPage(browser.page);

  await mainPage.clickNavigationLink("Multiple Windows");
  const openNewWindowPage = new OpenNewWindowPage(browser.page);
  const newWindow = await browser.openLinkInNewTab(() => openNewWindowPage.clickHereLink());

  const newWindowPage = new NewWindowPage(newWindow);
  expect(await newWindowPage.getNewWindowLabelText()).toBe(newWindowText);

});
