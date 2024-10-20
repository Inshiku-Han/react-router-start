import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const URL = `http://localhost:${process.env.PORT}`;

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',

	use: {
		baseURL: URL,
		trace: 'on-first-retry',
	},

	webServer: {
		command: 'pnpm run dev',
		url: URL,
		reuseExistingServer: !process.env.CI,
		stdout: 'ignore',
		stderr: 'pipe',
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
});
