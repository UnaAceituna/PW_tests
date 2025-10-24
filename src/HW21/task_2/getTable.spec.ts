// Создать функцию getTableRow(page, email), которая возвращает строку в таблице по емейлу.
// Например getTableRow(page, 'jsmith@gmail.com') => { "Last Name": "Smith", "First Name": "John", Email: "jsmith@gmail.com", Due: "$50.00", "Web Site": "http://www.jsmith.com" }

// Создайте тест, проверяющий данную функцию, используя все емейлы из таблицы Example 2

// Сайт: https://the-internet.herokuapp.com/tables

import { test, Page }  from "@playwright/test";
import { testData } from "./emails";

async function getTableRow(page: Page, email:string) {
    const table2 = page.locator("#table2")

    const tableRows = await table2.locator("tbody tr").all();
    const headersLocator = await table2.locator("th").all();

    const headers = await Promise.all(headersLocator.map((el) => el.innerText()));

        for (const row of tableRows) {
            const cells = row.locator("td").filter({ hasNot: page.locator("a") });
            const cell = await cells.allInnerTexts();
      
            const rowData = headers.reduce <Record<string, string>> ((result, header, i) => {
              result[header] = cell[i] ?? "";
              return result;
          }, {});

            if (rowData["Email"] === email)
                return rowData;
           // console.log(rowData)   
          }

        throw new Error (`No data for "${email}"`);
        }
       
test.describe("[Get_Table_By_Email]", () => {

    const url = "https://the-internet.herokuapp.com/tables" 

    test( 'GetByEmail', async ({ page }) => {
        await page.goto(url)     
    
        for (const row of testData){
            const getRowData = await getTableRow(page, row.email)
        }
})
})