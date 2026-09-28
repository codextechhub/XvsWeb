import { test, expect } from '@playwright/test';

for (const reducedMotion of ['no-preference', 'reduce'] as const) {
  test(`service tabs slide and retain section navigation (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.addInitScript(() => {
      const animate = Element.prototype.animate;
      Element.prototype.animate = function (...args) {
        if (this.matches('.group-nav-pill, .group-content')) {
          this.setAttribute('data-motion-played', 'true');
        }
        return animate.apply(this, args);
      };
    });
    await page.goto('/services#run-the-school');
    const tabs = page.getByRole('navigation', { name: 'Service groups' });
    await expect(tabs.locator('[data-group="run-the-school"]')).toHaveAttribute('aria-current', 'true');
    await tabs.locator('[data-group="teaching-learning"]').click();
    await expect(tabs.locator('[data-group="teaching-learning"]')).toHaveAttribute('aria-current', 'true');
    await expect(page).toHaveURL(/#teaching-learning$/);
    const content = page.locator('#teaching-learning .group-content');
    if (reducedMotion === 'no-preference') {
      await expect(tabs.locator('.group-nav-pill')).toHaveAttribute('data-motion-played', 'true');
      await expect(content).toHaveAttribute('data-motion-played', 'true');
    } else {
      await expect(content).not.toHaveAttribute('data-motion-played');
      await expect(tabs.locator('.group-nav-pill')).not.toHaveAttribute('data-motion-played');
    }
    await expect(content).toHaveCSS('transform', 'none');
    await expect.poll(() => tabs.evaluate(nav => {
      const pill = nav.querySelector('.group-nav-pill')!.getBoundingClientRect();
      const tab = nav.querySelector('[aria-current="true"]')!.getBoundingClientRect();
      return Math.abs(pill.x - tab.x) + Math.abs(pill.width - tab.width);
    })).toBeLessThan(2);
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
  });
}
