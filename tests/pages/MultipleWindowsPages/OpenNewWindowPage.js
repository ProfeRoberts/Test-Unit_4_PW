import BasePage from "#framework/ui/page/BasePage.js";
import { Label, Button } from '#framework/ui/elements/index.js';

export default class OpenNewWindowPage extends BasePage {
    // Implement Page Object
    constructor(page){
        super(new Label(page.getByRole('heading', { name: 'Opening a new window' })), 'Open a new window page');
        this.clickLink = new Button(page.getByRole('link', { name: 'Click Here' }), 'Click Here link');
    }

    async clickHereLink(){
        await this.clickLink.click();
    }
}
