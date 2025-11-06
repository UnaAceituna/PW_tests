import { Locator } from "@playwright/test";
import { expect } from "@playwright/test";
import { SalesPortalPage } from "../SalesPortalPage";
import LanaDelRey from "./products.data";

export class AddProductPage extends SalesPortalPage{
    readonly productsNameInput = this.page.locator("input[placeholder='Enter products name']");
    readonly productsPriceInput = this.page.locator("input[placeholder='Enter products price']");
    readonly manufactrurerInput = this.page.locator("#inputManufacturer");
    readonly amountInput = this.page.locator("input[placeholder='Enter product on-hands amount']");
    readonly notesInput = this.page.locator("#textareaNotes");
    readonly submitButton = this.page.locator("#save-new-product")
    readonly uniqueElement = this.productsNameInput;

    //добавление элемента
    async waitingForPageOpened() {
        await expect(this.uniqueElement).toBeVisible();
    }

    async clickOnAddProductButton() {
        await this.submitButton.click();
    }
    
    async addProducts() {
        await this.productsNameInput.fill(LanaDelRey.name);
        await this.productsPriceInput.fill(LanaDelRey.price.toString());
        await this.manufactrurerInput.selectOption(LanaDelRey.manufacturer);
        await this.amountInput.fill(LanaDelRey.amount.toString());
        await this.notesInput.fill(LanaDelRey.notes!);
    }
    //Верифицировать появившуюся нотификацию

}