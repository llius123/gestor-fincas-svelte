import { deleteTokenCookie } from '$lib/front/tokenService';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	deleteTokenCookie({ cookies });
	redirect(301, '/');
};
