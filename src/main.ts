import { manifestAgreement } from './shared/types/agreement.ts'
import { SQLITE } from './infrastructure/database/dataBaseClient.ts'
import { mainServer } from './infrastructure/http/server.ts'
import os from 'node:os'
import { io } from 'socket.io-client'
import path from 'node:path'
import fs from 'node:fs'
import { CacheRepository } from './infrastructure/cache/cache.repository.ts'

// Bun.spawn([path.join(process.cwd(), 'plugins', 'animeav1.exe')])

const pathPluginPort = path.join(os.tmpdir(), 'animeav1', 'config.json')
const config = JSON.parse(fs.readFileSync(pathPluginPort, 'utf-8'))
let port = config.port
let socket = io('http://localhost:' + port)
socket.on('connect', () => {
  console.log('✅ Connected to scraper server webSocket')
})
export const sendMessage = async (
  command: string,
  message: object,
): Promise<{ success: boolean; content: any }> => {
  return new Promise((resolve, reject) => {
    socket.emit(command, message, (response: any) => {
      resolve(response)
    })
  })
}
socket.on('disconnect', () => {
  console.log('❌ Disconnected from scraper server webSocket')
})
export const cacheRepository = CacheRepository.create()

await SQLITE`PRAGMA foreign_keys = ON`
await SQLITE`PRAGMA journal_mode = WAL`
await SQLITE`PRAGMA synchronous = NORMAL`

await SQLITE`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
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

    CREATE TABLE IF NOT EXISTS episodes (
        id TEXT PRIMARY KEY,
        cap INTEGER NOT NULL,
        anime_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (anime_id) REFERENCES animes(id)
        UNIQUE (anime_id, cap)
    );

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
const manifestDB = await SQLITE`SELECT * FROM plugins_manifest`

if (manifestDB.length === 0) {
  const manifest = await sendMessage('getManifest', {})

  if (manifest.success) {
    await SQLITE`
          INSERT INTO plugins_manifest (
            name,
            version,
            urlPage,
            date_created,
            filterSupportedList
          ) VALUES (
            ${manifest.content.name},
            ${manifest.content.version},
            ${manifest.content.urlPage},
            ${manifest.content.date_created},
            ${JSON.stringify(manifest.content.filterSupportedList)}
          )
        `
  }
}

mainServer
