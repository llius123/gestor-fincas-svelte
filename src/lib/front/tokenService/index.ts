import type { Cookies } from "@sveltejs/kit"

const key = 'gestor-fincas'

export const saveTokenCookie = ({token, cookies }: {token: string, cookies: Cookies }) => {
    cookies.set(key,token, {path: '/'})
}

export const getTokenCookie = ({cookies }: {cookies: Cookies }) => {
    return cookies.get(key)
}