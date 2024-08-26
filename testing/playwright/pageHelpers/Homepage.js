import { expect } from "@playwright/test";
import { getBaseUrl } from "../utils/namespace";

export class Homepage {
  page;
  isMobile;
  isDesktop;
  constructor(page, isMobile, isDesktop) {
    this.page = page;
    this.isMobile = isMobile;
    this.isDesktop = !isMobile;
  }

  async gotoHomepage() {
    const url = getBaseUrl();
    await this.page.goto(url);
  }

  async assert() {
    const test = this.page.getByText("Home");
    await expect(test).toBeVisible();
  }
}
