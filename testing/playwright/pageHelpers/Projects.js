import { expect } from "@playwright/test";
import { getBaseUrl } from "../utils/namespace";

export class Projects {
  page;
  isMobile;
  isDesktop;
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    this.isDesktop = !isMobile;
  }

  async goToProjects() {
    const url = getBaseUrl();
    await this.page.goto(`${url}/projects`);
    await this.page.waitForLoadState("load");
  }

  async assertUrl() {
    await expect(this.page).toHaveURL(/.*projects/);
  }

  async checkHeader() {
    const section = this.page.getByRole("heading", { name: "My Projects" });
    await expect(section).toBeVisible();
  }

  async clickNext() {
    await this.page.locator("[data-qa='next-button']").click();
  }

  async clickPrev() {
    await this.page.locator("[data-qa='prev-button']").click();
  }

  async checkProject(name) {
    const project = this.page.getByRole("img", {
      name,
    });
    await expect(project).toBeVisible();
  }
}
