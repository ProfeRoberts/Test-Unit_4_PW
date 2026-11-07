import {Label, Button} from '#framework/ui/elements/index.js';
import BasePage from '#framework/ui/page/BasePage.js';

export default class DynamicLoading extends BasePage{
    constructor(page){
        super(new Label(page.getByRole("heading", {name: 'Dynamically Loaded Page Elements'})), 'Dynamic Loading title');
        this.linkExample2 = new Button(page.getByRole("link", {name: "Example 2: Element rendered after the fact"}), "Example 2 link");
    }

    async clickExample2(){
        await this.linkExample2.click();
    }

}
