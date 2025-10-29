import test, { expect } from "@playwright/test";
import credentialsNegative from "./negativeData";

test.describe("[Registration]", () => {

    const url = "https://anatoly-karpovich.github.io/demo-login-form/"

    for ( const {credentials, errorMessage, title} of credentialsNegative) {
        test( title, async ({ page }) => {
            const { username, password } = credentials;

            await page.goto(url)
            const loginUsernameInput = page.locator(".loginForm input[type='text']")
            const loginPasswordInput = page.locator(".loginForm input[type='password']")
            const buttonSubmit = page.locator("#submit")
            const errorMessageLocator = page.locator("#errorMessage")
            const loginTextHeader = page.locator("#loginForm")

            await expect(loginTextHeader).toBeVisible()

            await loginUsernameInput.fill(username)
            await loginPasswordInput.fill(password)
            await buttonSubmit.click()
            await expect(errorMessageLocator).toHaveText(errorMessage)
        })

}
})