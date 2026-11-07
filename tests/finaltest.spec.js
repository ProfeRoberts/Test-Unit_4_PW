import {test, expect} from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage';
import DynamicLoading from './pages/Dynamicloading';
import DynamicExample2 from './pages/DynamicExample2';


test('Final test', async ({ customBrowser: browser}) => {
    const mainPage = new MainPage(browser.page);
    await mainPage.clickNavigationLink('Dynamic Loading');
    const dynamicLoading = new DynamicLoading(browser.page);
    const isOpen = await dynamicLoading.isPageOpened();
    expect(isOpen).toBe(true);
    await dynamicLoading.clickExample2();
    const dynamicExample2 = new DynamicExample2(browser.page);
    await dynamicExample2.clickStartButton();
    //expect(dynamicExample2.getHelloMessage()).toBe("Hello World!")
    const message = await dynamicExample2.getHelloMessage();
    expect(message).toBe("Hello World!");
});
