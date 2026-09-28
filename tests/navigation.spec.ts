import { test, expect } from '@playwright/test';

test('navbar stretches and magnifies text only during navigation', async ({ page }) => {
  await page.goto('/');
  await page.locator('.site-nav-link[data-path="/services"]').click();
  const label = page.locator('.site-nav-link[data-path="/services"] .site-nav-label');
  await expect.poll(() => label.evaluate(el => el.getAnimations().length)).toBe(1);
  const scale = await label.evaluate(el => {
    const animation = el.getAnimations()[0];
    animation.pause();
    animation.currentTime = 100;
    return new DOMMatrix(getComputedStyle(el).transform).a;
  });
  expect(scale).toBeGreaterThan(1.1);
  await label.evaluate(el => el.getAnimations()[0].finish());
  await expect(label).toHaveCSS('transform', 'none');
  await expect.poll(() => page.locator('.site-nav-pill').evaluate(el => el.getAnimations().length)).toBe(0);
  const alignment = await page.locator('.site-nav').evaluate(nav => {
    const pill = nav.querySelector('.site-nav-pill')!.getBoundingClientRect();
    const link = nav.querySelector('[aria-current="page"]')!.getBoundingClientRect();
    return Math.abs(pill.x - link.x) + Math.abs(pill.width - link.width);
  });
  expect(alignment).toBeLessThan(2);
  await page.locator('.site-nav').screenshot({path:'test-results/navbar-settled.png'});
});

test('navbar respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('.site-nav-link[data-path="/about"]').click();
  await expect(page.locator('.site-nav-link[data-path="/about"]')).toHaveClass(/is-active/);
  expect(await page.locator('.site-nav').evaluate(el => el.getAnimations({subtree:true}).length)).toBe(0);
});
