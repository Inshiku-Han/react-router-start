import { createRoutesStub } from 'react-router';
import { test } from 'vitest';
import { render } from 'vitest-browser-react';

import Component from './login';

const ReactRouterStub = createRoutesStub([
	{
		path: '/',
		Component,
	},
]);

test('Render', async () => {
	render(<ReactRouterStub />);
});
