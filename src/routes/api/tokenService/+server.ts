import type { RequestHandler } from './$types';
import { verifyAccessToken } from '$lib/server/db/login/token-service';

export const GET: RequestHandler = async ({request}) => {
    const {token} =  await request.json();
    const res: boolean = await verifyAccessToken(token)

	return new Response(JSON.stringify(res));
};