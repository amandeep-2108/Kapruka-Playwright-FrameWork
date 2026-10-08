import { BasePage_SOLID } from './basePage_SOLID';
import { config } from '../config/environment';
import { expect, Locator, Page } from '@playwright/test';

export class loginPage_SOLID extends BasePage_SOLID {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('#exampleInputEmail1');
        this.passwordInput = page.locator('#exampleInputPassword1');
        this.loginButton = page.locator('input[name="Login"]');
    }

    async goto(): Promise<void> {
        await this.navigate(`${config.baseUrl}${config.loginPath}`);
    }

    async login(email: string, password: string): Promise<void> {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async verifyLoginSuccess(): Promise<void> {
        const currentUrl = this.page.url();
        await expect(this.page).not.toHaveURL(/accountLogin/);
        // -> /..../
    }

    async isLoaded(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }
}