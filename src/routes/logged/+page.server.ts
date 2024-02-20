import { getTokenCookie } from '$lib/front/tokenService';
import { verifyAccessToken } from '$lib/server/db/login/token-service';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = getTokenCookie({ cookies });
	const valid = await verifyAccessToken(token || '');
	if (!valid) {
		redirect(301, '/');
	}
};
