import BasePage from '#framework/ui/page/BasePage.js';
import {Label} from '#framework/ui/elements/Label.js'
import {Button} from '#framework/ui/elements/Button.js'

export default class Playground extends BasePage{
    constructor(page){
        super(new Label(page.getByRole("heading", {name:"UI Test Automation Playground"}), 'Playgroung heading'));
        this.sampleLink = new Button(page.getByRole("link", {name:"Sample App"}), "Sample App");
    }

    async clickSample() {
        await this.sampleLink.click();
    }
}
