import { test, expect } from "@playwright/test";

test("about content reveals on scroll", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/about");
  const card = page.locator(".person").first();
  await expect(card).toHaveCSS("opacity", "0");
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveCSS("opacity", "1");
});

test("about page shows everything at once with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about");
  await expect(page.locator(".person").first()).toHaveCSS("opacity", "1");
});

test("about page opens the demo form", async ({ page }) => {
  await page.goto("/about");
  await expect(page).toHaveTitle(/About XVS/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Behind every school day");
  await page.locator(".demo-banner").getByRole("link", { name: "Book a demo" }).click();
  await expect(page).toHaveURL("/contact");
  await expect(page.getByLabel("First name")).toBeVisible();
});
