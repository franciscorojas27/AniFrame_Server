import { SQL } from "bun";
import { SQLITE } from "../database/dataBaseClient";
import { ICacheRepository } from "./ICacheRepository";

const CACHE_TTL = Number(process.env.CACHE_TTL) || 5 * 60 * 1000;

export class CacheRepository implements ICacheRepository {
  private db: SQL;
  private constructor() {
    this.db = SQLITE;
  }

  public static create() {
    return new CacheRepository();
  }
  public async get(key: string): Promise<string | null> {
    try {
      const data = await this
        .db`SELECT value,createdAt FROM cache WHERE id = ${key} LIMIT 1`.values();

      if (data.length === 0) return null;
      return data[0][0];
    } catch (error) {
      return null;
    }
  }
  public async set(key: string, value: string): Promise<void> {
    if (!value || (Array.isArray(value) && value.length === 0)) return;
    await this.db`
      INSERT OR REPLACE INTO cache (id, value, createdAt)
      VALUES (${key}, ${value}, CURRENT_TIMESTAMP)
    `;
    return;
  }
  public clear(): Promise<void> {
    return this
      .db`DELETE FROM cache WHERE createdAt <= datetime('now', '-${CACHE_TTL} milliseconds')  `;
  }
}
