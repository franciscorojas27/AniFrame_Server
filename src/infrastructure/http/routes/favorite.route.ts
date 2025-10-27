import Elysia, { t } from 'elysia'
import { FavoriteRepository } from '@/core/repositories/favorite.repository.ts'
import {
  favoriteEntity,
  favoriteInvalid,
} from '@/core/entities/favorite.entity.ts'

export const favoriteRoutes = new Elysia({ prefix: '/favorite' })
  .get(
    '/',
    async ({ status }) => {
      try {
        const value = await FavoriteRepository.get()
        if (!value) throw status(404, { error: 'Not Found' })
        return value
      } catch (error) {
        throw status(500, { error: 'Server Error' })
      }
    },
    {
      response: {
        200: t.Array(favoriteEntity),
        404: favoriteInvalid,
        500: favoriteInvalid,
      },
    },
  )
  .post(
    '/',
    async ({ body, status }) => {
      try {
        await FavoriteRepository.create(body)
        return status(201, { success: true, message: 'Favorite created' })
      } catch (error) {
        throw status(500, { error: 'Server Error' })
      }
    },
    {
      body: favoriteEntity,
      response: {
        201: t.Object({
          success: t.Boolean(),
          message: t.String(),
        }),
        400: favoriteInvalid,
        500: favoriteInvalid,
      },
    },
  )

  .delete(
    '/:id',
    async ({ status, params: { id } }) => {
      try {
        await FavoriteRepository.delete(id)
        return status(204)
      } catch (error) {
        throw status(500)
      }
    },
    {
      params: t.Object({
        id: t.Number(),
      }),
    },
  )
