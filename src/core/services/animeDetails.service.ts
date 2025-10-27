import { status } from 'elysia'
import { sendMessage } from '../../main.ts'
import { AnimeRepository } from '../repositories/anime.repository.ts'
import {
  AnimeDetails,
  AnimeDetailsEpisode,
} from '../entities/animeDetails.entity.ts'

export abstract class AnimeDetailsService {
  static async getAnimeDetails(
    slug: string,
  ): Promise<{ details: AnimeDetails; episodes: AnimeDetailsEpisode[] }> {
    const anime = await AnimeRepository.findBySlug(slug)
    if (anime) {
      const episodes = await AnimeRepository.findEpisodesWithHistory(anime.id)
      const favorited = await AnimeRepository.isFavorited(anime.id)
      const lastEpisode = await AnimeRepository.getLastEpisode(anime.id)
      return {
        details: {
          id: anime.id,
          name: anime.name,
          description: anime.description,
          imgUrl: anime.img_url,
          status: anime.status,
          slug: anime.slug,
          date: anime.date,
          genres: JSON.parse(anime.genres),
          caps: anime.caps,
          favorited,
          lastEpisode,
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
    const lastEpisode = await AnimeRepository.getLastEpisode(
      animeClient.content.id,
    )
    const favorited = await AnimeRepository.isFavorited(animeClient.content.id)

    return {
      details: { ...animeClient.content, lastEpisode, favorited, slug },
      episodes,
    }
  }
  static async updateAnime(
    slug: string,
  ): Promise<{ details: AnimeDetails; episodes: AnimeDetailsEpisode[] }> {
    const anime = await AnimeRepository.findBySlug(slug)
    if (!anime) throw status(404, { error: 'Anime not found' })
    let animeClient
    try {
      animeClient = (await sendMessage('getAnimeDetails', { slug })) as {
        success: boolean
        content: AnimeDetails
      }
    } catch {
      throw status(500, { error: 'Failed to fetch anime list from source' })
    }

    if (!animeClient.success) throw status(404, { error: 'Anime not found' })

    await AnimeRepository.update(animeClient.content, slug)

    await AnimeRepository.insertInitialEpisodesAndHistory(
      animeClient.content.id,
      animeClient.content.caps,
    )
    await AnimeRepository.getLastEpisode(animeClient.content.id)
    const episodes = await AnimeRepository.findEpisodesWithHistory(
      animeClient.content.id,
    )
    let lastEpisode = await AnimeRepository.getLastEpisode(
      animeClient.content.id,
    )
    const favorited = await AnimeRepository.isFavorited(animeClient.content.id)

    return {
      details: { ...animeClient.content, slug, favorited, lastEpisode },
      episodes,
    }
  }
}
