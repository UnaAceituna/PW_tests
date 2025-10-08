import test, { expect } from "@playwright/test";

test.describe("[anatoly-karpovich] [demo-registration-form]", () => {
    
    test('Registration', async ({ page }) => {
    
    const url = "https://anatoly-karpovich.github.io/demo-registration-form/"

    const credentials = {
        firstname: "Pamela",
        lastname: "Anderson",
        password: "Malibu123",
        address: "Malibu, 123",
        phone: "+3451234567898",
        email: "blondie@gmail.com"
    }

    const userFirstName = page.locator('//*[@id = "firstName"]');
    const userLasttName = page.locator('//*[@id = "lastName"]');
    const userAddress = page.locator('//*[@id = "address"]');
    const userEmail = page.locator('//*[@id = "email"]');
    const userPhone = page.locator('//*[@id = "phone"]');
    const userCountry = page.locator('#country');
    const userGender = page.locator('//*[contains(@value, "female")]');
    const userHobbiesFirst = page.locator('//*[contains(@type, "checkbox")][2]');
    const userHobbiesSecond = page.locator('//*[contains(@type, "checkbox")][5]')
    const userLanguage = page.locator('//*[@id = "language"]');
    const userSkills = page.locator('//*[contains(@value, "JavaScript")]');
    const userBirthYear = page.locator('//*[@id = "year"]');
    const userBirthMonth = page.locator('//*[@id = "month"]');
    const userBirthDay = page.locator('//*[@id = "day"]');
    const userPassword = page.locator('//*[@id = "password"]');
    const userConfirmPasssword = page.locator('//*[@id = "password-confirm"]');
    const submit = page.locator('//*[text()="Submit"][@class = "btn btn-primary"]');
    const succesRegistration = page.locator('h2');

    await page.goto(url);
    await userFirstName.fill(credentials.firstname);
    await userLasttName.fill(credentials.lastname);
    await userAddress.fill(credentials.address);
    await userEmail.fill(credentials.email);
    await userPhone.fill(credentials.phone);
    await userCountry.selectOption('USA');
    await userGender.check();
    await userHobbiesFirst.check();
    await userHobbiesSecond.check();
    await userLanguage.fill("English");
    await userSkills.click();
    await userBirthYear.selectOption('1970');
    await userBirthMonth.selectOption('July');
    await userBirthDay.selectOption('1');
    await userPassword.fill(credentials.password);
    await userConfirmPasssword.fill(credentials.password);
    await submit.click();
    await expect(succesRegistration).toContainText('Registration Details')

    })


})