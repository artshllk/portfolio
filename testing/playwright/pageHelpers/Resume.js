import { expect } from "@playwright/test";
import { getBaseUrl } from "../utils/namespace";

export class Resume {
  page;
  isMobile;
  isDesktop;
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    this.isDesktop = !isMobile;
  }

  async goToResume() {
    const url = getBaseUrl();
    await this.page.goto(`${url}/resume`);
    await this.page.waitForLoadState("load");
  }

  async assertUrl() {
    await expect(this.page).toHaveURL(/.*resume/);
  }

  async checkTabContent(tab) {
    const tabContent = this.page.locator(`[data-qa='${tab}-content']`);
    await expect(tabContent).toBeVisible();
  }

  async clickTab(name) {
    const tab = this.page.getByRole("tab", { name });
    await expect(tab).toBeVisible();
    await tab.click();
  }
}
