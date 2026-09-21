import { test, expect } from '@playwright/test'

for (const width of [320, 360, 390, 430, 768, 820, 834, 1024, 1180, 1440]) {
  test(`homepage fits ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText('One system for every campus, every record, every day')
    await expect(page.locator('[data-hcount="8640"]')).toHaveText('8,640')
    await expect(page.locator('[data-rail-track]').first().locator(':scope > div')).toHaveCount(10)
    if ([390, 820, 1440].includes(width)) await page.screenshot({ path: `test-results/home-${width}.png` })
    await page.locator('#demo').scrollIntoViewIfNeeded()
    const overflow = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: innerWidth,
      fields: [...document.querySelectorAll('input, textarea')].filter(el => {
        const r = el.getBoundingClientRect(); return r.right > innerWidth + 1 || r.left < 0
      }).length }))
    expect(overflow.page).toBeLessThanOrEqual(overflow.viewport)
    expect(overflow.fields).toBe(0)
    const clipped = await page.evaluate(() => [...document.querySelectorAll('h1, h2, h3, form, input, textarea')]
      .filter(el => { const r = el.getBoundingClientRect(); return r.right > innerWidth + 1 || r.left < -1 })
      .map(el => el.textContent?.slice(0, 60) || el.tagName))
    expect(clipped).toEqual([])
    expect(errors).toEqual([])
  })
}

test('mobile menu, route navigation, browser back, and reload', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Menu' })
  await menu.click()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await page.locator('[data-nav-panel]').getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL('/about')
  await page.reload()
  await expect(page.locator('h1')).toBeVisible()
  await page.goBack()
  await expect(page).toHaveURL('/')
  await menu.click()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await page.locator('[data-nav-panel]').getByRole('link', { name: 'Book a Demo' }).click()
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await expect(page.getByLabel('Full name')).toBeInViewport()
})

for (const path of ['/products', '/about', '/contact', '/privacy', '/terms', '/missing-page']) {
  test(`direct route ${path}`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    await page.setViewportSize({ width: 320, height: 740 })
    await page.goto(path)
    await expect(page.locator('h1')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    expect(errors).toEqual([])
  })
}

test('reduced motion renders completed data and validates demo fields', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('[data-hcount="8640"]')).toHaveText('8,640')
  await expect(page.locator('[data-fpct]')).toHaveText('78%')
  await page.getByLabel('Full name').fill('A')
  await page.getByLabel('School or group').click()
  await expect(page.locator('[data-err="name"]')).toHaveText('Enter your full name')
  await page.getByLabel('Full name').fill('Ada Okonkwo')
  await expect(page.locator('[data-err="name"]')).toBeHidden()
})
