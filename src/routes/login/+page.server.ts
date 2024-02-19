import { saveTokenCookie } from "$lib/front/tokenService";
import { login } from "$lib/server/db/login/login";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
    
        const username = data.get('username');
        const password = data.get('password');

        if (!username) {
            return { success: false, error: 'Username is required' };
        }

        if (!password) {
            return { success: false, error: 'Password is required' };
        }

        const user = await login(username.toString(), password.toString())
        if(user === undefined){
            return {success: false, error: 'Wrong username or password',}
        }

        saveTokenCookie({token: user.token, cookies})

        redirect(301,'/logged')
	},
} satisfies Actions;