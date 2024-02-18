import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import { users, type NewUser } from "./schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

await db.delete(users)
const user: NewUser = {
    id:1,
    fullName: "Yisus",
    secondName: "Yisusito"
}
await db.insert(users).values(user)