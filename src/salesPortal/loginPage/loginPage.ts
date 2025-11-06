import { expect } from "@playwright/test";
import { SalesPortalPage } from "../SalesPortalPage";
import credentials from "./credentials.data";

export class LoginPage extends SalesPortalPage {
    
        welcomeText = this.page.locator("//h1[@class='display-4 welcome-text']");
        emailInput = this.page.locator("#emailinput");
        passwordInput = this.page.locator("#passwordinput");
        loginButton = this.page.locator("button[type='submit']");
        uniqueElement = this.emailInput;

        async waitingForPageOpened() {
            await expect(this.uniqueElement).toBeVisible();
            await expect(this.passwordInput).toBeVisible()
        }

        async clickOnLoginButtonMethod() {
            await this.loginButton.click();
        }
        
        async fillCredentialsMethod() {
            await this.emailInput.fill(credentials.email);
            await this.passwordInput.fill(credentials.password)
        }
        
}