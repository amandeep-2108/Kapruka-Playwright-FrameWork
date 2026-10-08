import { test, expect } from '@playwright/test';
import { BasePage_SOLID } from '../../pages/basePage_SOLID';
import { ScrollPage } from '../../pages/ScrolPage';

test.describe('Kapruka scroll to event', () => {
    test('should scroll to best selling gifts', async ({ page }) => {
        const scrollPage = new ScrollPage(page);
        await scrollPage.goto();
        await scrollPage.ScrollToBestSellingGifts();
    })
})