import { test, expect } from '@playwright/test';

test('has the start mission timeline button', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('button', { name: 'Start Mission Timeline' })
  ).toBeVisible();
});
