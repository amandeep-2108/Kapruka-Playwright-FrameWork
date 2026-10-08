
import { test, expect } from '@playwright/test';
import { CurrencyPage } from '../../pages/CurrencyPage';

test.describe('Kapuruka Currency dropdown', () => {
    test('Switch from Currency USD to INR', async ({ page }) => {
        const currencyPage = new CurrencyPage(page);

        await currencyPage.goto();
        await currencyPage.isLoaded();

        await currencyPage.selectDropdown(currencyPage.currencyDropdown, 'USD');
        await currencyPage.verifyCurrency('USD');

        await currencyPage.selectDropdown(currencyPage.currencyDropdown, 'INR');
        await currencyPage.verifyCurrency('INR');
    });
});

