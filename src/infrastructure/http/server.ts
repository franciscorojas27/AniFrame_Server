import Elysia from 'elysia'
import { animeRoutes } from './routes/anime.route.ts'
import { cors } from '@elysiajs/cors'
import cron, { Patterns } from '@elysiajs/cron'
import { SQLITE } from '../database/dataBaseClient.ts'
import { historyRoutes } from './routes/history.route.ts'
import { favoriteRoutes } from './routes/favorite.route.ts'
export const mainServer = new Elysia()
  .use(cors())
  .onRequest(({ request }) => {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.url}`,
    )
  })
  .use(animeRoutes)
  .use(historyRoutes)
  .use(favoriteRoutes)
  .use(
    cron({
      name: 'clearCache',
      pattern: Patterns.EVERY_10_MINUTES,
      async run(store) {
        if (
          Boolean(
            (await SQLITE`SELECT EXISTS(SELECT 1 FROM cache)`.values())[0][0],
          )
        ) {
          await SQLITE`DELETE FROM cache WHERE createdAt <= datetime('now', '-5 minutes')`
        }
      },
    }),
  )

console.log(`Server running at http://localhost:3000`)
