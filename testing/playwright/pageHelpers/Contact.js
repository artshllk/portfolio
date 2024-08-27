import { expect } from "@playwright/test";
import { getBaseUrl } from "../utils/namespace";

export class Contact {
  page;
  isMobile;
  isDesktop;
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    this.isDesktop = !isMobile;
  }

  async gotoContactForm() {
    const url = getBaseUrl();
    await this.page.goto(`${url}/contact`);
  }

  async assertUrl() {
    await expect(this.page).toHaveURL(/.*contact/);
  }

  async fillContactForm(name, email, message) {
    const nameInput = this.page.getByPlaceholder("Name");
    await expect(nameInput).toBeVisible();
    await nameInput.fill(name);

    const emailInput = this.page.getByPlaceholder("Email");
    await expect(emailInput).toBeVisible();
    await emailInput.fill(email);

    const textArea = this.page.getByPlaceholder("Type your message here");
    await expect(textArea).toBeVisible();
    await textArea.fill(message);
  }

  async clickSubmit() {
    const submit = this.page.locator("[data-qa='submit-button']");
    await expect(submit).toHaveText("Submit");
    await submit.click();
  }

  async checkToast() {
    const toast = this.page.locator("[data-qa='description-toast']");
    await expect(toast).toBeVisible();
  }
}
