import test from "@playwright/test";
import { Homepage } from "../pageHelpers/Homepage";
import { Contact } from "../pageHelpers/Contact";
import { Projects } from "../pageHelpers/Projects";
import { Resume } from "../pageHelpers/Resume";

test.describe("Resume page", () => {
  test("View resume page and tabs", async ({ page, isMobile }) => {
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
