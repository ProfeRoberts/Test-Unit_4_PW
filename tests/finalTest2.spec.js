import {test, expect} from '#framework/ui/fixtures/browser.fixture.js';
import ConfigReader from '#framework/utils/ConfigReader.js';
import Playground from './pages/playground';
import SampleApp from './pages/SampleApp';


test("Second Final Test", async ({customBrowser: browser}) => {
    const testdata = ConfigReader.getTestData();
    const playground = new Playground(browser.page);
    await playground.clickSample();
    const sampleApp = new SampleApp(browser.page);
    await sampleApp.waitForPageToLoad();
    const sampleOpen = await sampleApp.isPageOpened();
    expect(sampleOpen).toBe(true);
    await sampleApp.typeCredentials(testdata.username);
    await sampleApp.clickLogin();
    const status = await sampleApp.getStatus();
    expect(status).toBe(`Welcome, ${testdata.username}!`);

});
