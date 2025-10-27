import { SQLITE } from '../../infrastructure/database/dataBaseClient.ts'
import { cacheRepository, sendMessage } from '../../main.ts'
import { animeVideoEntity } from '../entities/animeVideo.entity.ts'
import { status } from 'elysia'

export abstract class AnimeVideoService {
  static async getVideoSource(
    slug: string,
    cap: number,
  ): Promise<animeVideoEntity.animeVideo> {
    const [manifest] = (await SQLITE`SELECT * FROM plugins_manifest`) as Array<{
      name: string
      version: string
      urlPage: string
      date_created: string
      filterSupportedList: string
      createdAt: string
    }>
    if (!manifest) {
      throw status(500, {
        error: 'Manifest not found',
      } satisfies animeVideoEntity.animeVideoInvalid)
    }
    const cacheKey = `getAnimeStreamingLinks-${slug}-${cap}`
    const cached = await cacheRepository.get(cacheKey)
    if (cached) {
      try {
        return JSON.parse(cached) as animeVideoEntity.animeVideo
      } catch {
        await cacheRepository.delete(cacheKey)
      }
    }

    let videoSource
    try {
      videoSource = await sendMessage('getAnimeStreamingLinks', {
        url: [`${manifest.urlPage}/media/${slug}/${cap}`],
      })
    } catch (error) {
      throw status(500, { error: 'Failed to fetch video source' })
    }

    if (!videoSource.success || videoSource.content.length === 0) {
      throw status(404, { error: 'Video source not found' })
    }
    await cacheRepository.set(cacheKey, JSON.stringify(videoSource.content[0]))
    return videoSource.content[0]
  }
  static async getEpisodes(slug: string) {
    const cacheKey = 'getEpisodeList-' + slug
    const cached = await cacheRepository.get(cacheKey)
    if (cached) {
      try {
        return JSON.parse(cached)
      } catch {
        await cacheRepository.delete(cacheKey)
      }
    }
    let animeClient
    try {
      animeClient = await sendMessage('getEpisodeList', { slug })
    } catch (err) {
      throw status(500, { error: 'Failed to fetch anime list from source' })
    }
    if (!animeClient.success) {
      throw status(404, { error: 'Anime home list not found' })
    }

    await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content))
    return animeClient.content
  }
}
