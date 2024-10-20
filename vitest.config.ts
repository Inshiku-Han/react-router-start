import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	return {
		plugins: [react(), tsconfigPaths()],
		test: {
			setupFiles: './vitest.setup.ts',
			browser: {
				enabled: true,
				name: 'chromium',
				provider: 'playwright',
			},
			include: [
				'app/**/*.unit.{test,spec}.@(ts|tsx)',
				'app/**/*.browser.{test,spec}.@(ts|tsx)',
			],
		},
	};
});
