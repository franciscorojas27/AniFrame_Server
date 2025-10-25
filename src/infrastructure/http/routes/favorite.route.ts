import Elysia, { t } from 'elysia'
import { SQLITE } from '../../database/dataBaseClient.ts'
import { randomUUIDv7 } from 'bun'

export const favoriteRoutes = new Elysia({ prefix: '/favorite' })

favoriteRoutes.get('/', async ({ status }) => {
  const [value] =
    await SQLITE`SELECT anime_id,name,slug,img_url FROM favorites ORDER BY updated_at DESC`
  if (!value) return status(404)

  return Response.json(value)
})
favoriteRoutes.post(
  '/',
  async ({ body: { id, name, slug, urlImg }, status }) => {
    try {
      await SQLITE`INSERT INTO favorites (id,user_id,anime_id, name, slug, img_url) VALUES (${randomUUIDv7()},"1", ${id}, ${name}, ${slug}, ${urlImg})`
      return status(201)
    } catch (error) {
      return status(500)
    }
  },
  {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
      slug: t.String(),
      urlImg: t.String(),
    }),
  },
)
favoriteRoutes.delete(
  '/:id',
  async ({ status, params: { id } }) => {
    try {
      await SQLITE`DELETE FROM favorites WHERE anime_id = ${id}`
      return status(204)
    } catch (error) {
      return status(500)
    }
  },
  {
    params: t.Object({
      id: t.Number(),
    }),
  },
)
