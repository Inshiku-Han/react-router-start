import { redirect } from 'react-router';

import { LoginForm } from '~/components/login/login-form';
import type * as Route from './+types.login';

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const email = formData.get('email');

	return redirect('/', {
		headers: {
			'Set-Cookie': `${email}`,
		},
	});
}

export default function LoginRoute() {
	return <LoginForm />;
}
