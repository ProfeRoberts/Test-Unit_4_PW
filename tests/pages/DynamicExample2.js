import {Label, Button} from '#framework/ui/elements/index.js';
import BasePage from '#framework/ui/page/BasePage.js';

export default class DynamicExample2 extends BasePage{
    constructor(page){
        super(new Label(page.getByRole("heading", {name: "Example 2: Element rendered after the fact"})), 'Dynamic Example 2 title');
        this.buttonExample2 = new Button(page.getByRole("button", {name: "Start"}), "Start");
        this.helloWorld = new Label(page.getByRole("heading", {name: "Hello World!"}), "Hello World");
    }

    async clickStartButton(){
        await this.buttonExample2.click();
    }

    async getHelloMessage(){
        return await this.helloWorld.getText();
    }
}
