
import { Page, Locator } from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID.ts';

export class CurrencyPage extends BasePage_SOLID
{
    readonly page: Page;
    readonly currencyDropDown: Locator;

    constructor(page: Page)
    {
        super(page);
        this.page = page;
        this.currencyDropDown = page.getByRole('combobox', { name: 'Select Currency' });
    }

    async goto(): Promise<void>
    {
        await this.page.goto('/');
        await this.currencyDropDown.waitFor({ state: 'visible' });
    }
}
    
