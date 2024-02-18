import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users } from "./schema";

const sqlite = new Database("./sqlite.db");
const db = drizzle(sqlite);

export const a = async() => db
  .select()
  .from(users)
  .all();