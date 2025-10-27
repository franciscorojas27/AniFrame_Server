import Elysia, { t } from 'elysia'
import { SQLITE } from '@/infrastructure/database/dataBaseClient.ts'
import { AnimeRepository } from '@/core/repositories/anime.repository.ts'
import {
  historyEntity,
  historyInvalid,
} from '@/core/entities/history.entity.ts'
import { ActivityHistoryRepository } from '@/core/repositories/activityHistory.repository.ts'

export const historyRoutes = new Elysia({ prefix: '/history' })
  .get(
    '/',
    async ({ status }) => {
      try {
        const value = await ActivityHistoryRepository.getHistory()
        if (value.length === 0) return status(404, { error: 'Not Found' })
        return status(200, value)
      } catch (error) {
        throw status(500, { error: 'Internal Server Error' })
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
      body: { name, slug, imgUrl, watched, seconds },
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
          imgUrl,
        )
        return status(200, { success: true })
      } catch {
        throw status(500, { error: 'Internal Server Error' })
      }
    },
    {
      body: t.Object({
        name: t.String(),
        slug: t.String(),
        imgUrl: t.String(),
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
    async ({ body, status }) => {
      const { cap, anime_id, watched } = body
      try {
        await AnimeRepository.insertOrUpdateHistory(
          anime_id,
          cap,
          1,
          0,
          watched,
        )
        return status(214, { success: true, message: 'Estado actualizado' })
      } catch (error) {
        throw status(500, { error: 'Internal Server Error' })
      }
    },
    {
      body: t.Object({
        anime_id: t.Number(),
        cap: t.Number(),
        watched: t.Boolean(),
      }),
      response: {
        214: t.Object({
          success: t.Boolean(),
          message: t.String(),
        }),
        500: t.Object({
          error: t.String(),
        }),
      },
    },
  )
