import { test, expect } from '@playwright/test';

test('go to login', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveURL('login');
});
