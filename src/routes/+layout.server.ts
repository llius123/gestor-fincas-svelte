import { getTokenCookie } from '$lib/front/tokenService';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const cookie = getTokenCookie({ cookies });
	return {
		isUserLogged: cookie !== undefined
	};
};
