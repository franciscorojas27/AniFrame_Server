import Elysia, { t } from 'elysia'
import { SQLITE } from '../../database/dataBaseClient.ts'
import { AnimeRepository } from '../../../core/repositories/anime.repository.ts'
import {
  historyEntity,
  historyInvalid,
} from '../../../core/entities/history.entity.ts'
import { ActivityHistoryRepository } from '../../../core/repositories/activityHistory.repository.ts'

export const historyRoutes = new Elysia({ prefix: '/history' })

historyRoutes
  .get(
    '/',
    async () => {
      try {
        const value = await ActivityHistoryRepository.getHistory()
        if (value.length === 0) return { error: 'No history found' }
        return value
      } catch (error) {
        return { error: 'Internal Server Error' }
      }
    },
    {
      response: {
        200: t.Array(historyEntity),
        404: historyInvalid,
        500: historyInvalid,
      },
    },
  )
  .post(
    '/add/:cap/:id',
    async ({
      body: { name, slug, urlImg, watched, seconds },
      status,
      params: { cap, id },
    }) => {
      try {
        const value =
          (await SQLITE`SELECT * FROM history WHERE user_id = 1 AND anime_id = ${id}`) as []
        if (value.length == 0) {
          await AnimeRepository.insertOrUpdateHistory(id, cap, 1, 0, false)
          return status(200, { success: true })
        }
        await AnimeRepository.insertOrUpdateHistory(
          id,
          cap,
          1,
          seconds,
          watched,
        )
        await ActivityHistoryRepository.insertOrUpdateHistory(
          id,
          cap,
          name,
          slug,
          urlImg,
        )
        return status(200, { success: true })
      } catch {
        return status(500, { error: 'Internal Server Error' })
      }
    },
    {
      body: t.Object({
        name: t.String(),
        slug: t.String(),
        urlImg: t.String(),
        watched: t.Boolean(),
        seconds: t.Number(),
      }),
      params: t.Object({
        cap: t.Number(),
        id: t.Number(),
      }),
    },
  )
  .put(
    '/toggle/watched',
    async ({ body }) => {
      const { cap, anime_id, watched } = body
      await AnimeRepository.insertOrUpdateHistory(anime_id, cap, 1, 0, watched)
      return { success: true, message: 'Estado actualizado' }
    },
    {
      body: t.Object({
        anime_id: t.Number(),
        cap: t.Number(),
        watched: t.Boolean(),
      }),
    },
  )
