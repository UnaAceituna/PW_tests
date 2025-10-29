import { Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export abstract class SalesPortalPage extends BasePage {
    abstract uniqueElement: Locator;
    }
