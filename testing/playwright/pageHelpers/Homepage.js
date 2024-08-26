import { expect } from "@playwright/test";

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
    await this.page.goto("http://localhost:3000/");
  }

  async assert() {
    const test = this.page.getByText("Home");
    await expect(test).toBeVisible();
  }
}
