import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db: any = null;

// Initialize SQLite database connection
async function initializeDB() {
    if (!db) {
        db = await open({
            filename: "./data/bot_data.sqlite",
            driver: sqlite3.Database
        });

        // Create tables if they don't exist
        await db.exec(`
            CREATE TABLE IF NOT EXISTS cookies (
                user_id int PRIMARY KEY,
                count int DEFAULT 0
            )
        `);
    }

    return db;
}

export async function setData(key: string, value: string): Promise<void> {
    try {
        const database = await initializeDB();

        // Convert value to integer
        const count: number = parseInt(value) || 0;

        await database.run(`
            INSERT INTO cookies (user_id, count)
            VALUES (?, ?)
            ON CONFLICT (user_id) DO UPDATE SET count = ?
        `, [key, count, count]);
    } catch (err) {
        console.error(`Error setting data for key '${key}':`, err);
    }
}

export async function getData(key: string): Promise<string> {
    try {
        const database = await initializeDB();

        const row = await database.get(`
            SELECT count FROM cookies
            WHERE user_id = ?
        `, [key]);

        return row ? row.count.toString() : "NotFound";
    } catch (err) {
        console.error(`Error getting data for key '${key}':`, err);
        return "NotFound";
    }
}