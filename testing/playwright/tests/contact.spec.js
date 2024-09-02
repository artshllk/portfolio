import test from "@playwright/test";
import { Contact } from "../pageHelpers/Contact";

test.describe("Contact page", () => {
  test("Should submit a message and verify confirmation", async ({
    page,
    isMobile,
  }) => {
    const contact = new Contact(page, isMobile);

    await contact.gotoContactForm();
    await contact.assertUrl();
    await contact.fillContactForm(
      "John",
      "johndoe@gmail.com",
      "Hello I am John, I would like to schedule a meeting with you"
    );
    await contact.clickSubmit();
    await contact.checkToast();
  });
});
