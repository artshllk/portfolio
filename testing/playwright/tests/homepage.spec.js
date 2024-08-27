import test from "@playwright/test";
import { Homepage } from "../pageHelpers/Homepage";

test.describe("Home page test", () => {
  test("gotoHomepage", async ({ page, isMobile }) => {
    const homepage = new Homepage(page, isMobile);

    await homepage.gotoHomepage();
    await homepage.checkHeader();
  });
});
