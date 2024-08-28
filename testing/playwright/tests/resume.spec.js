import test from "@playwright/test";
import { Resume } from "../pageHelpers/Resume";

test.describe("Resume page", () => {
  test("Should navigate to the resume page and verify tab contents", async ({ page, isMobile }) => {
    const resume = new Resume(page, isMobile);

    await resume.goToResume();
    await resume.assertUrl();
    await resume.checkTabContent("about");
    await resume.clickTab("Skills");
    await resume.checkTabContent("skills");
    await resume.clickTab("Experience");
    await resume.checkTabContent("experience");
  });
});
