import { test, expect } from "@playwright/test";
import { Homepage } from "../pageHelpers/Homepage";

test.describe("Homepage", () => {
  test("Download CV button should work", async ({ page, isMobile }) => {
    const homepage = new Homepage(page, isMobile);

    await homepage.gotoHomepage();
    await homepage.checkHeader();

    const [download] = await Promise.all([
      page.waitForEvent("download"),
      homepage.clickDownloadCV(),
    ]);

    expect(download).toBeTruthy();
    expect(download.suggestedFilename()).toBe("CV.pdf");
  });
});
