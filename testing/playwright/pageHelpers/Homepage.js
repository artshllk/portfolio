import { expect } from "@playwright/test";
import { getBaseUrl } from "../utils/namespace";

export class Homepage {
  page;
  isMobile;
  isDesktop;
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    this.isDesktop = !isMobile;
  }

  async gotoHomepage() {
    const url = getBaseUrl();
    await this.page.goto(url);
  }

  async assert(link) {
    const homeSelector = this.page.locator("a").getByText(link);
    await expect(homeSelector).toBeVisible();
  }

  async checkHeader() {
    const header = await this.page.locator("[data-qa='header']");
    await expect(header).toBeVisible();
  }
}
