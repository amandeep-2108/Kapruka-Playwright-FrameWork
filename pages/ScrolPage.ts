import { BasePage_SOLID } from "./basePage_SOLID";
import { type Page, expect, Locator } from "playwright/test";

export class ScrollPage extends BasePage_SOLID {
  readonly bestSellingGifts: Locator;

  constructor(page: Page) {
    super(page);
    this.bestSellingGifts = page.getByRole('heading',{name: 'Gifts to Sri Lanka - Best Sellers'})
    //this.bestSellingGift = page.getByText('Best Selling Gifts', { exact: true });
  }
   async isLoaded():Promise<void> {
   await expect(this.bestSellingGifts).toBeVisible();
   }
   async ScrollToBestSellingGifts():Promise<void>
   {
    await this.scrollToElement(this.bestSellingGifts)
   }
    
   async goto(): Promise<void>
   {
    await this.navigate('/');
   
  }


  }
