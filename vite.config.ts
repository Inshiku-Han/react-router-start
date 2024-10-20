import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [!isStorybook && reactRouter(), tsconfigPaths()],
		server: {
			open: true,
			port: Number(env.PORT),
		},
	};
});
