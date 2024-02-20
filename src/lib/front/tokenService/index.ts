import type { Cookies } from "@sveltejs/kit"

const key = 'gestor-fincas'
const path = '/'

export const saveTokenCookie = ({token, cookies }: {token: string, cookies: Cookies }) => {
    cookies.set(key,token, {path})
}

export const getTokenCookie = ({cookies }: {cookies: Cookies }) => {
    return cookies.get(key)
}

export const deleteTokenCookie = ({cookies }: {cookies: Cookies }) => {
    cookies.delete(key, {path})
}