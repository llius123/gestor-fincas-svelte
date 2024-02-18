import type { RequestHandler } from './$types';
import { a } from '$lib/server/db';
import type { User } from '$lib/server/db/schema';

export const GET: RequestHandler = async () => {
    // const {username, password} = request.body
   const res: User[] = await a()
    

	return new Response(JSON.stringify(res));
};