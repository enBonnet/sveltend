import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({request}) => {
    const data = await request.formData();
		const identifier = data.get('identifier');
		const password = data.get('password');

		if (!identifier) {
			return fail(400, {identifier, missing: true})
		}

		if (!password) {
			return fail(400, {password, incorrect: true})
		}

		return {success: true}
	}
};