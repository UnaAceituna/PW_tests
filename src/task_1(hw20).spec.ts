import test, { expect } from "@playwright/test";

test.describe("[task1] [herokuapp]", () => {

    test('Dynamic Controls', async ({ page }) => {

        enum HEADERS {
            mainHeader = "Dynamic Controls",
            pararaph = "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously.",
            messageAfterRemove = "It's gone!",
            messageAfterAdd = "It's back!"

        }

        const url = 'https://the-internet.herokuapp.com/'
        await page.goto(url);

        const dynamicControlLink = page.locator('//*[@href = "/dynamic_controls"]');
        const removeButton = page.locator('//*[@id="checkbox-example"]/button');
        const mainTextHeader = page.locator('div h4:first-child');
        const paragraphTextHeader = page.locator('div p');
        const checkbox = page.locator('//input[@type="checkbox"]');
        const addButton = page.locator('//button[text() = "Add"]')
        const message = page.locator('#message')
        const messageBack = page.locator('//p[text() = "It\'s back!"]')

        await dynamicControlLink.click();
        await expect(removeButton).toBeVisible();
        await expect(removeButton).toBeInViewport();
        await expect(mainTextHeader).toHaveText(HEADERS.mainHeader);
        await expect(paragraphTextHeader).toHaveText(HEADERS.pararaph);
        await expect (checkbox).toBeEnabled();
        await removeButton.click()

        await expect(checkbox).toBeVisible({ visible: false, timeout: 10000})
        await checkbox.waitFor({ state: "hidden"})
        await expect(addButton).toBeVisible();
        await expect(message).toHaveText(HEADERS.messageAfterRemove)
        await addButton.click()
        await expect(checkbox).toBeVisible({ visible: true, timeout: 10000})
        await expect(messageBack).toHaveText(HEADERS.messageAfterAdd)

        // await page.waitForFunction(() => {
        //     const checkbox = document.querySelector('input[label="blah"]') //'//input[@type="checkbox"]'
        //     const button = document.querySelector('#checkbox-example > button')?.textContent //'//button[text() = "Add"]'
        //     const message = document.querySelector('#message')?.textContent

        //     return !checkbox && button === "Add" && message === "It's gone!"
        // }, 
        // "",
        // { timeout: 10000 })
    })

})