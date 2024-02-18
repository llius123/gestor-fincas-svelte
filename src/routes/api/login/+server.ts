import type { RequestHandler } from './$types';
import type { User } from '$lib/server/db/schema';
import { login } from '$lib/server/db/login/login';

export const POST: RequestHandler = async ({request}) => {
    const {username, password} =  await request.json();
   const res: User | undefined = await login(username, password)

	return new Response(JSON.stringify(res));
};