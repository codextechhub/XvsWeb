import { test, expect } from '@playwright/test'

test('About content reveals on scroll and respects motion preference changes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/about')
  const card = page.locator('.xa-person').first()
  await expect(card).toHaveCSS('opacity', '0')
  await card.scrollIntoViewIfNeeded()
  await expect(card).toHaveCSS('opacity', '1')
  await expect(card).toHaveCSS('transform', 'none')
  await expect(page.locator('.xa-invitation-inner')).toHaveCSS('opacity', '0')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect(page.locator('.xa-reveal-pending')).toHaveCount(0)
  await expect(page.locator('.xa-invitation-inner')).toHaveCSS('opacity', '1')
})

for (const width of [320, 768, 1440]) {
  test(`XVS about page fits ${width}px and opens the demo enquiry`, async ({ page }) => {
    await page.setViewportSize({ width, height: 960 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/about')
    await expect(page).toHaveTitle(/About XVS/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Behind every school day')
    const clipped = await page.locator('main').evaluate(main =>
      [...main.querySelectorAll('h1, h2, h3, p, article, a')].filter(el => {
        const bounds = el.getBoundingClientRect()
        return bounds.left < -1 || bounds.right > innerWidth + 1
      }).map(el => el.textContent))
    expect(clipped).toEqual([])
    await page.screenshot({ path: `test-results/about-${width}.png`, fullPage: true })
    await page.getByRole('link', { name: 'Book a demo', exact: true }).last().click()
    await expect(page).toHaveURL('/contact')
    await expect(page.getByLabel('Full name')).toBeVisible()
  })
}
