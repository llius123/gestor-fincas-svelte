import { getTokenCookie } from '$lib/front/tokenService';
import { verifyAccessToken } from '$lib/server/db/login/token-service';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({cookies}) => {
    const token = getTokenCookie({cookies})
	return {
		valid: await verifyAccessToken(token || '')
	};
};