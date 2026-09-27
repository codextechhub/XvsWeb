import { test, expect } from "@playwright/test";

const PAGES = ["/", "/services", "/about", "/contact", "/privacy", "/terms", "/missing-page"];

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`every page fits ${width}px without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    for (const path of PAGES) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      expect(overflow, `${path} scrolls sideways`).toBeLessThanOrEqual(0);
    }
    expect(errors).toEqual([]);
  });
}

test("home page shows the headline and links to services", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/XVS/);
  await expect(page.locator("h1")).toContainText("Run your whole school");
  await expect(page.locator(".preview-card")).toHaveCount(6);
  await page.locator(".preview-card").first().click();
  await expect(page).toHaveURL("/services#run-the-school");
});

test("services page lists all 24 services and opens one", async ({ page }) => {
  await page.goto("/services");
  await expect(page.locator(".service-row")).toHaveCount(24);
  const toggle = page.getByRole("button", { name: /Billing & Invoicing/ });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("Without XVS").first()).toBeVisible();
});

test("a link to a service opens it", async ({ page }) => {
  await page.goto("/services#audit-activity-logging");
  await expect(page.getByRole("button", { name: /Audit & Activity Logging/ })).toHaveAttribute("aria-expanded", "true");
});

test("old addresses redirect", async ({ page }) => {
  await page.goto("/products");
  await expect(page).toHaveURL("/services");
  await page.goto("/xvs");
  await expect(page).toHaveURL("/");
});

test("mobile menu navigates and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.locator("#mobile-menu").getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL("/about");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await page.goBack();
  await expect(page).toHaveURL("/");
});

test("contact form checks required fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Book my demo" }).click();
  await expect(page.getByText("Enter your first name")).toBeVisible();
  await expect(page.getByLabel("First name")).toBeFocused();
  await page.getByLabel("First name").fill("Ada");
  await expect(page.getByText("Enter your first name")).toBeHidden();
  await page.getByLabel("Work email").fill("not-an-email");
  await page.getByLabel("Work email").blur();
  await expect(page.getByText("Enter a valid email")).toBeVisible();
  await page.getByText("A question").click();
  await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();
});
