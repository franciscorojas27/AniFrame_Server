import Elysia from "elysia";
import { animeRoutes } from "./routes/anime.route";

export const mainServer = new Elysia()
  .onRequest(({ request, status }) => {
    console.log(`${request} ${status}`);
  })
  .use(animeRoutes)
  .listen({ port: 3000, hostname: "0.0.0.0" });

console.log(`Server running at http://localhost:3000`);
