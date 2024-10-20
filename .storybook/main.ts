import type { StorybookConfig } from '@storybook/react-vite';

export default {
	stories: ['../app/**/*.stories.@(ts|tsx)'],
	framework: '@storybook/react-vite',
} satisfies StorybookConfig;
