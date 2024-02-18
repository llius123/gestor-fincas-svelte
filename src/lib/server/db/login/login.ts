import { and, eq } from "drizzle-orm";
import { db } from "..";
import { users, type User } from "../schema";

export const login = async(username: string, password: string): Promise<User | undefined> => {
    const user: User[] = await db.select().from(users).where(and(eq(users.username, username), eq(users.password, password))).limit(1)
    return user[0]
}