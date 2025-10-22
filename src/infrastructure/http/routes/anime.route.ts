import Elysia, { t } from 'elysia'
import { AnimeHomeService } from '../../../core/services/animeHome.service.ts'
import {
  animeHomeEntity,
  animeHomeInvalid,
} from '../../../core/entities/animeHome.entity.ts'
import { animeVideoEntity } from '../../../core/entities/animeVideo.entity.ts'
import { AnimeVideoService } from '../../../core/services/animeVideo.service.ts'
import { animeFilter } from '../../../core/entities/animeFilter.entity.ts'
import { AnimeSearchEntity } from '../../../core/entities/animeSearch.entity.ts'
import { AnimeSearchService } from '../../../core/services/animeSearch.service.ts'
import {
  AnimeDetailsEntity,
  AnimeDetailsEpisodeEntity,
  AnimeDetailsInvalidEntity,
} from '../../../core/entities/animeDetails.entity.ts'
import { AnimeDetailsService } from '../../../core/services/animeDetails.service.ts'
import { SQLITE } from '../../database/dataBaseClient.ts'
import { AnimeRepository } from '../../../core/repositories/anime.repository.ts'

export const animeRoutes = new Elysia({ prefix: '/anime' })

animeRoutes.get(
  '/home',
  async () => {
    const animeClient = await AnimeHomeService.getHomePageListAnime()
    return animeClient
  },
  {
    response: {
      200: t.Array(animeHomeEntity),
      400: animeHomeInvalid,
      500: animeHomeInvalid,
    },
  },
)
animeRoutes.get(
  '/history/:cap/:id',
  async ({
    request,
    status,
    query: { watched, seconds },
    params: { cap, id },
  }) => {
    const value =
      (await SQLITE`SELECT * FROM history WHERE user_id = 1 AND anime_id = ${id}`) as []
    if (value.length == 0) {
      await AnimeRepository.insertOrUpdateHistory(id, cap, 1, 0, false)
      return status(200)
    }
    await AnimeRepository.insertOrUpdateHistory(id, cap, 1, seconds, watched)
    return status(200)
  },
  {
    params: t.Object({
      cap: t.Number(),
      id: t.Number(),
    }),
    query: t.Object({
      watched: t.Boolean(),
      seconds: t.Number(),
    }),
  },
)
animeRoutes.get(
  '/video/:slug/:cap/:id',
  async ({ params: { slug, cap, id } }) => {
    const animeVideo = await AnimeVideoService.getVideoSource(slug, cap)
    const history = (await SQLITE`SELECT watched, last_position_seconds
    from history`) as Array<{ watched: boolean; last_position_seconds: number }>
    if (history.length === 0) {
      await AnimeRepository.insertOrUpdateHistory(id, cap, 1, 0, false)
      return {
        result: animeVideo,
        history: {
          watched: false,
          last_position_seconds: 0,
        },
      }
    }

    return {
      result: animeVideo,
      history: {
        watched: Boolean(history[0].watched),
        last_position_seconds: history[0].last_position_seconds,
      },
    }
  },
  {
    params: t.Object({
      slug: t.String(),
      cap: t.Number(),
      id: t.Number(),
    }),
    response: {
      200: t.Object({
        result: t.Array(animeVideoEntity.animeVideo),
        history: t.Object({
          watched: t.Boolean(),
          last_position_seconds: t.Number(),
        }),
      }),
      400: animeVideoEntity.animeVideoInvalid,
      500: animeVideoEntity.animeVideoInvalid,
    },
  },
)
animeRoutes.get(
  '/search',
  async ({ query }) => {
    const { status, genres, category, querySearch, page } = query
    const result = await AnimeSearchService.getSearchAnimeResults(
      querySearch,
      page,
      {
        genres,
        status,
        category,
      },
    )
    return result
  },
  {
    query: t.Object({
      querySearch: t.String(),
      page: t.Optional(t.Number()),
      ...animeFilter.properties,
    }),
    response: t.Object({
      results: t.Array(AnimeSearchEntity),
      numberPages: t.Number(),
    }),
  },
)
animeRoutes.get(
  '/details/:slug',
  async ({ params: { slug } }) => {
    const animeDetails = await AnimeDetailsService.getAnimeDetails(slug)
    return animeDetails
  },
  {
    params: t.Object({
      slug: t.String(),
    }),
    response: {
      200: t.Object({
        details: AnimeDetailsEntity,
        episodes: t.Array(AnimeDetailsEpisodeEntity),
      }),
      404: AnimeDetailsInvalidEntity,
      500: AnimeDetailsInvalidEntity,
    },
  },
)
