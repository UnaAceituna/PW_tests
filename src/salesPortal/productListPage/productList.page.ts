import { Locator } from "@playwright/test";
import { SalesPortalPage } from "../SalesPortalPage";

export class ProductPage extends SalesPortalPage{
    addProductButton = this.page.locator("//a[@name='add-button']");
    productPageTitle = this.page.locator("h2.fw-bold");
    uniqueElement = this.addProductButton;

    async clickAddProduct() {
        await this.addProductButton.click()
    }
}