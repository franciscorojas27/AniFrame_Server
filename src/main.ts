import { mainServer } from './infrastructure/http/server.ts'
import os from 'node:os'
import { io } from 'socket.io-client'
import path from 'node:path'
import fs from 'node:fs'
import { CacheRepository } from './infrastructure/cache/cache.repository.ts'
import { initDatabase } from './infrastructure/database/initDatabase.ts'
import { SOCKET_IO_URL } from './config/config.ts'
import { initManifest } from './infrastructure/database/initManifest.ts'

// Bun.spawn([path.join(process.cwd(), 'plugins', 'animeav1.exe')])

const pathPluginPort = path.join(os.tmpdir(), 'animeav1', 'config.json')
const config = JSON.parse(fs.readFileSync(pathPluginPort, 'utf-8'))
let socket = io(SOCKET_IO_URL + config.port)
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

await initDatabase()

await initManifest()

mainServer
