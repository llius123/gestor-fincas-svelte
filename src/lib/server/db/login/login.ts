import { and, eq } from "drizzle-orm";
import { db } from "..";
import { users, type User } from "../schema";
import { generateAccessToken, verifyAccessToken } from "./token-service";

export const login = async(username: string, password: string): Promise<{user: User, token: string} | undefined> => {
    const user: User[] = await db.select().from(users).where(and(eq(users.username, username), eq(users.password, password))).limit(1)
    if(user[0] === undefined) return undefined

    const token =await generateAccessToken(user[0])
    return {user: user[0], token}
}

export const verifyToken = async(token: string): Promise<boolean> => {
    return verifyAccessToken(token)
}