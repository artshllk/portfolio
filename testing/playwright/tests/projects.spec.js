import test from "@playwright/test";
import { Homepage } from "../pageHelpers/Homepage";
import { Contact } from "../pageHelpers/Contact";
import { Projects } from "../pageHelpers/Projects";

test.describe("Projects page", () => {
  test("View projects", async ({ page, isMobile }) => {
    const projects = new Projects(page, isMobile);

    await projects.goToProjects();
    await projects.assertUrl();
    await projects.checkHeader();
    await projects.checkProject("Website Portfolio");
    await projects.clickNext();
    await projects.checkProject("Memory Game");
    await projects.clickNext();
    await projects.checkProject("Invitation Party App");
    await projects.clickNext();
    await projects.checkProject("Speed Typing Game");
    await projects.clickPrev();
    await projects.checkProject("Invitation Party App");
  });
});
