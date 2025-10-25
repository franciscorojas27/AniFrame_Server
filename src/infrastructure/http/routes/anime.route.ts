import Elysia, { status, t } from 'elysia'
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
  AnimeDetails,
  AnimeDetailsEntity,
  AnimeDetailsEpisodeEntity,
  AnimeDetailsInvalidEntity,
} from '../../../core/entities/animeDetails.entity.ts'
import { AnimeDetailsService } from '../../../core/services/animeDetails.service.ts'
import { cacheRepository, sendMessage } from '../../../main.ts'
import { HistoryService } from '../../../core/services/history.services.ts'
import { AnimeScheduleService } from '../../../core/services/animeSchedule.service.ts'
export const animeRoutes = new Elysia({ prefix: '/anime' })

 

animeRoutes.get('/episodes/:slug', async ({ params: { slug } }) => {
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
})

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
  '/video/:slug/:cap/:id',
  async ({ params: { slug, cap, id } }) => {
    const animeVideo = await AnimeVideoService.getVideoSource(slug, cap)
    const history = await HistoryService.getHistory(id, cap)
    return {
      result: animeVideo,
      history,
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
        result: animeVideoEntity.animeVideo,
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

animeRoutes.get('/schedule', async () => {
  const schedule = await AnimeScheduleService.getSchedule()
  return schedule
})

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
      querySearch: t.String({ default: ' ' }),
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
animeRoutes.get(
  '/details/update/:slug',
  async ({ params: { slug } }) => {
    const animeClient = await AnimeDetailsService.updateAnime(slug)
    return animeClient
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
