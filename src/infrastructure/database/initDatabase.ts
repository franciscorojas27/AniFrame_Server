import { SQLITE } from "./dataBaseClient"

export async function initDatabase() {
  await SQLITE`PRAGMA foreign_keys = ON`
  await SQLITE`PRAGMA journal_mode = WAL`
  await SQLITE`PRAGMA synchronous = NORMAL`

  await SQLITE`
        BEGIN TRANSACTION;
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS animes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            url_img TEXT NOT NULL,
            status TEXT NOT NULL,
            slug TEXT NOT NULL,
            date INTEGER NOT NULL,
            genres TEXT NOT NULL,
            caps INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_animes_slug ON animes(slug);

        CREATE TABLE IF NOT EXISTS episodes (
            id TEXT PRIMARY KEY,
            cap INTEGER NOT NULL,
            anime_id INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (anime_id) REFERENCES animes(id),
            UNIQUE (anime_id, cap)
        );
        CREATE INDEX IF NOT EXISTS idx_episodes_anime_id ON episodes(anime_id);

        CREATE TABLE IF NOT EXISTS favorites (
            id TEXT PRIMARY KEY NOT NULL,
            user_id INTEGER NOT NULL DEFAULT 1,
            anime_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            slug TEXT NOT NULL,
            img_url TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE (user_id, anime_id)
        );

        CREATE TABLE IF NOT EXISTS activity_history (
            id TEXT PRIMARY KEY NOT NULL,
            user_id INTEGER NOT NULL,
            anime_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            slug TEXT NOT NULL,
            img_url TEXT NOT NULL,
            last_episode INTEGER NOT NULL DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE (user_id, anime_id)
        );
        CREATE INDEX IF NOT EXISTS idx_activity_user_id ON activity_history(user_id);
        CREATE INDEX IF NOT EXISTS idx_activity_anime_id ON activity_history(anime_id);

        CREATE TABLE IF NOT EXISTS history (
            id TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            anime_id INTEGER NOT NULL,
            cap_number INTEGER NOT NULL,
            last_position_seconds INTEGER DEFAULT 0,
            watched INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE (user_id, anime_id, cap_number)
        );
        CREATE INDEX IF NOT EXISTS idx_history_user_id ON history(user_id);
        CREATE INDEX IF NOT EXISTS idx_history_anime_id ON history(anime_id);

      COMMIT;
    `
  await SQLITE`
          CREATE TABLE IF NOT EXISTS cache (
            id TEXT PRIMARY KEY NOT NULL,
            value TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
          )
        `
  await SQLITE`
          CREATE TABLE IF NOT EXISTS plugins_manifest (
            name TEXT PRIMARY KEY NOT NULL,
            version TEXT NOT NULL,
            urlPage TEXT NOT NULL,
            date_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            filterSupportedList TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
          )
        `
}
