import Elysia from "elysia";
import { animeRoutes } from "./routes/anime.route.ts";
import { cors } from "@elysiajs/cors";
import cron, { Patterns } from "@elysiajs/cron";
import { SQLITE } from "../database/dataBaseClient.ts";
export const mainServer = new Elysia()
  .use(cors())
  .onRequest(({ request, status }) => {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.url}`
    );
  })
  .use(animeRoutes)
  .use(
    cron({
      name: "clearCache",
      pattern: Patterns.EVERY_5_MINUTES,
      async run(store) {
        if (Boolean((await SQLITE`SELECT EXISTS(SELECT 1 FROM cache)`.values())[0][0])) {
          await SQLITE`DELETE FROM cache WHERE createdAt <= datetime('now', '-5 minutes')`;
        }
      },
    })
  )
  .listen({ port: 3000, hostname: "0.0.0.0" });

console.log(`Server running at http://localhost:3000`);
