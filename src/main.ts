// import { ManifestClient } from './infrastructure/cli/ManifestClient.ts'
import { manifestAgreement } from './shared/types/agreement.ts'
import { SQLITE } from './infrastructure/database/dataBaseClient.ts'
import { mainServer } from './infrastructure/http/server.ts'
import os from 'node:os'
import { io } from 'socket.io-client'
import path from 'node:path'
import fs from 'node:fs'
import { CacheRepository } from './infrastructure/cache/cache.repository.ts'

Bun.spawn([path.join(process.cwd(), 'plugins', 'animeav1.exe')])

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
