import test, { expect } from "@playwright/test";
import { LoginPage } from "../../salesPortal/loginPage/loginPage";
import { AddProductPage } from "../../salesPortal/addProductPage/addProduct.page";
import { ProductPage } from "../../salesPortal/productListPage/productList.page";
import productData from "../../salesPortal/addProductPage/products.data";

test.describe("[sales-portal] [adding_product]", () => {

    const url = "http://localhost:8585/#/login"
    
    test('add_product', async ({ page }) => {
        await page.goto(url);
        //логин
        const homePage = new LoginPage(page);
        const addProductPage = new AddProductPage(page);
        const productPage = new ProductPage(page);
        await homePage.waitingForPageOpened();
        await homePage.fillCredentialsMethod();
        await homePage.clickOnLoginButtonMethod();

        //home page
        const headerProductsLocator = page.locator("#products-from-home")
        const productPageTitle = page.locator("h2.fw-bold");
        const succesAddedProduct = page.locator(".toast-body");
        await headerProductsLocator.click();

        //productlist page
        await expect(productPageTitle).toHaveText("Products List ")
        await productPage.addProductButton.click();

        //addroductpage
        await addProductPage.addProducts();
        await addProductPage.clickOnAddProductButton();

        //ожидаем редирект на страницу продуктов
        await expect(succesAddedProduct).toHaveText("Product was successfully created")

        //Верифицировать созданный продукт в таблице (сравнить все имеющиеся поля, продукт должен быть самым верхним)
        const str = page.locator("//table/tbody/tr").filter({ hasText: productData.name })
        const cells = await str.locator('td').allInnerTexts()
        console.log(cells)

        expect(cells[0]).toBe(productData.name);
        expect(cells[1].slice(1, 5)).toBe(productData.price.toString());
        expect(cells[2]).toBe(productData.manufacturer);

    })

})