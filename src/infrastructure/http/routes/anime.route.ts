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
  AnimeDetailsInvalidEntity,
} from '../../../core/entities/animeDetails.entity.ts'
import { AnimeDetailsService } from '../../../core/services/animeDetails.service.ts'

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
  '/video/:id/:cap',
  async ({ params: { id, cap } }) => {
    const animeVideo = await AnimeVideoService.getVideoSource(id, cap)
    return animeVideo
  },
  {
    params: t.Object({
      id: t.String(),
      cap: t.String(),
    }),
    response: {
      200: t.Array(animeVideoEntity.animeVideo),
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
    console.log('hola')
    return animeDetails
  },
  {
    params: t.Object({
      slug: t.String(),
    }),
    response: {
      200: AnimeDetailsEntity,
      404: AnimeDetailsInvalidEntity,
      500: AnimeDetailsInvalidEntity,
    },
  },
)
