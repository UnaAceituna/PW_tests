// Написать Page Object класс для страницы Sign In:
//   - email input
//   - password input
//   - login button
//   - fillCredentials method
//   - click on login button method

import test, { expect } from "@playwright/test";
import { LoginPage } from "../../salesPortal/loginPage/loginPage";

test.describe("[sales-portal] [sign_in]", () => {

    const url = "http://localhost:8585/#/login"
    
    test('sign_in', async ({ page }) => {
        await page.goto(url);

        const homePage = new LoginPage(page);

        await homePage.waitingForPageOpened();
        await homePage.fillCredentialsMethod();
        await homePage.clickOnLoginButtonMethod();
    })

})