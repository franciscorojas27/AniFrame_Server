import { status } from 'elysia'
import { cacheRepository, sendMessage } from '../../main.ts'

export abstract class AnimeScheduleService {
  static async getSchedule(): Promise<object> {
    const cacheKey = 'getAnimeSchedule'
    const cached = await cacheRepository.get(cacheKey)
    if (cached) {
      try {
        return JSON.parse(cached)
      } catch {
        await cacheRepository.delete(cacheKey)
      }
    }
    let animeSchedule
    try {
      animeSchedule = await sendMessage('getAnimeSchedule', {})
    } catch {
      throw status(500, { error: 'Failed to fetch anime list from source' })
    }
    await cacheRepository.set(cacheKey, JSON.stringify(animeSchedule.content))
    return animeSchedule.content
  }
}
