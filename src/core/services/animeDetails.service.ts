import { status } from 'elysia'
import { sendMessage } from '../../main.ts'
import { AnimeRepository } from '../repositories/anime.repository.ts'
import {
  AnimeDetails,
  AnimeDetailsEpisode,
} from '../entities/animeDetails.entity.ts'
import { SQLITE } from '../../infrastructure/database/dataBaseClient.ts'

export abstract class AnimeDetailsService {
  static async getAnimeDetails(
    slug: string,
  ): Promise<{ details: AnimeDetails; episodes: AnimeDetailsEpisode[] }> {
    const anime = await AnimeRepository.findBySlug(slug)

    if (anime) {
      const episodes = await AnimeRepository.findEpisodesWithHistory(anime[0])
      return {
        details: {
          id: anime[0],
          name: anime[1],
          description: anime[2],
          urlImg: anime[3],
          status: anime[4],
          slug: anime[5],
          date: anime[6],
          genres: JSON.parse(anime[7]),
          caps: anime[8],
        },
        episodes,
      }
    }

    let animeClient
    try {
      animeClient = (await sendMessage('getAnimeDetails', { slug })) as {
        success: boolean
        content: AnimeDetails
      }
    } catch {
      throw status(500, { error: 'Failed to fetch anime list from source' })
    }

    if (!animeClient.success) {
      throw status(404, { error: 'Anime not found' })
    }
    await AnimeRepository.insertAnime(animeClient.content, slug)
    await AnimeRepository.insertInitialEpisodesAndHistory(
      animeClient.content.id,
      animeClient.content.caps,
    )
    const episodes = await AnimeRepository.findEpisodesWithHistory(
      animeClient.content.id,
    )
    return { details: { ...animeClient.content, slug }, episodes }
  }
}
