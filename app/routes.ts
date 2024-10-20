import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from '@react-router/dev/routes';

export const routes: RouteConfig = [
	index('routes/index.tsx'),
	...prefix('login', [
		layout('layouts/login-layout.tsx', [index('routes/login.tsx')]),
	]),
	...prefix('dashboard', [
		layout('layouts/dashboard-layout.tsx', [
			index('routes/dashboard/index.tsx'),
		]),
	]),
];
