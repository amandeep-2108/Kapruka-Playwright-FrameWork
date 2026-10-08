import { Page, Locator } from '@playwright/test';

//textbox, mouse click

export abstract class BasePage_SOLID {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page; // LHS this.page (line #7), RHS page - constructor parameter
    }

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'load' });
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value); //hardcoding
    }

    //scrollToElement
    async scrollToElement(element: Locator): Promise<void>
    {
        await element.scrollIntoViewIfNeeded();
    }

    abstract isLoaded(): Promise<void>;
}