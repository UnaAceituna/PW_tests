import test, { expect } from "@playwright/test";

test.describe("[anatoly-karpovich] [FormAuthorizaion]", () => {
    
    const credentials = {
        username: "Amie",
        password: "123456qQ"
    }

    enum NOTIFICATIONS {
        'successRegister' = 'Successfully registered! Please, click Back to return on login page',
        'buttnBackToLogin' = 'Back to login page'
    }

    const url = "https://anatoly-karpovich.github.io/demo-login-form/"
    
    test('Registration and login', async ({ page }) => {
        
        const userLogin = page.locator('#userNameOnRegister')
        const userPassword = page.locator('#passwordOnRegister')
        const successNotification = page.locator('//*[@id="errorMessageOnRegister"]')
        const buttonToRegister = page.locator('//*[@id="registerOnLogin"]')
        const buttonRegister = page.locator('//*[@id = "register"]')
        const userLogin2 = page.locator('#userName')
        const buttonSubmit = page.locator('#submit')
        const userPassword2 = page.locator('#password')
        const successNotification2 = page.locator('//*[@id = "successMessage"]');
        const backButton = page.locator('//*[@id = "backOnRegister"]')

        await page.goto(url);
        await buttonToRegister.click();
        await userLogin.fill(credentials.username);
        await userPassword.fill(credentials.password);
        await buttonRegister.click();
        await expect(successNotification).toHaveText(NOTIFICATIONS.successRegister);
        
        await backButton.click();
        await userLogin2.fill(credentials.username);
        await userPassword2.fill(credentials.password);
        await buttonSubmit.click();
        await expect(successNotification2).toContainText(`Hello, ${credentials.username}!`)
        
    })

})