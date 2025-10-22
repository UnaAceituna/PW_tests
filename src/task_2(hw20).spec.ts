import test, { expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe("[task2] [localStorage]", () => {

    test.beforeEach(async ({ page }) => {
        const url = "https://anatoly-karpovich.github.io/demo-login-form/";
        await page.goto(url);
    })

    test('Local storage', async ({ page }) => {

        interface ICredenials {
            name: string;
            password: string;
        }

        const credentials: ICredenials = {
            name: "test@gmail.com",
            password: "SecretPw123!@#"
        }
       
        const buttreg = page.locator("#registerOnLogin")
        const userLogin = page.locator('#userName')
        const buttonSubmit = page.locator('#submit')
        const userPassword = page.locator('#password')
        const successNotification2 = page.locator('//*[@id = "successMessage"]');

        await expect(buttreg).toBeVisible()

        await page.evaluate((creds) => { 
            localStorage.setItem(creds.name, JSON.stringify(creds))
        }, credentials);

        await page.reload()
        await userLogin.fill(credentials.name);
        await userPassword.fill(credentials.password);
        await buttonSubmit.click();
        await expect(successNotification2).toContainText(`Hello, ${credentials.name}!`)
    })
})