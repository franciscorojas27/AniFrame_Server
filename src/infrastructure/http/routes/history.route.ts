import Elysia, { t } from 'elysia'
import { SQLITE } from '../../database/dataBaseClient.ts'
import { AnimeRepository } from '../../../core/repositories/anime.repository.ts'

export const historyRoutes = new Elysia({ prefix: '/history' })

historyRoutes.get('/', async ({ status }) => {
  const value =
    await SQLITE`SELECT anime_id,name,slug,img_url,last_episode FROM activity_history ORDER BY updated_at DESC`
  if (value.length === 0) return status(404)

  return Response.json(value)
})
historyRoutes.post(
  '/add/:cap/:id',
  async ({
    body: { name, slug, urlImg, watched, seconds },
    status,
    params: { cap, id },
  }) => {
    const value =
      (await SQLITE`SELECT * FROM history WHERE user_id = 1 AND anime_id = ${id}`) as []
    if (value.length == 0) {
      await AnimeRepository.insertOrUpdateHistory(id, cap, 1, 0, false)
      return status(200)
    }
    await AnimeRepository.insertOrUpdateHistory(id, cap, 1, seconds, watched)
    await SQLITE`INSERT INTO activity_history (id,user_id,anime_id,name,slug,img_url,last_episode,updated_at) values(${Bun.randomUUIDv7()},1,${id},${name},${slug},${urlImg},${cap},datetime('now')) ON CONFLICT(user_id, anime_id) DO UPDATE SET last_episode = ${cap}, img_url = ${urlImg}, updated_at = datetime('now')`
    return status(200)
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
