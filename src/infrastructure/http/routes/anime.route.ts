import Elysia from "elysia";
import { CacheRepository } from "../../cache/cache.repository";
import { AnimeClient } from "../../cli/animeClient";
import { SQLITE } from "../../database/dataBaseClient";
import { exeManager } from "../../../main";

const cacheRepository = CacheRepository.create();

export const animeRoutes = new Elysia({ prefix: "/anime" });

animeRoutes.get("/home", async ({ status }) => {
  const cached = await cacheRepository.get("getHomePageListAnime");
  if (cached) return cached;

  const animeClient = await AnimeClient.getInstance().getHomePageListAnime();
  if (!animeClient) return status(404, { error: "Not Found" });
  await cacheRepository.set(
    "getHomePageListAnime",
    JSON.stringify(animeClient)
  );
  return animeClient;
});

animeRoutes.get("/video/:id/:cap", async ({ status, params: { id, cap } }) => {
  const manifest = await SQLITE`SELECT * FROM puglins_manifest`.values();
  if (manifest.length === 0) {
    return status(500, { error: "Internal Server Error" });
  }
  // const cached = await cacheRepository.get(
  //   `getAnimeStreamingLinks-${id}-${cap}`
  // );
  // if (cached) return cached;
  const ansWare = {
    command: "getAnimeStreamingLinks",
    args: { url: [`${manifest[0][2]}/media/${id}/${cap}`] },
  };
  const videoSource = await exeManager.sendCommand(ansWare);
  if (!videoSource) return status(404, { error: "Not Found" });
  // await cacheRepository.set(
  //   `getAnimeStreamingLinks-${id}-${cap}`,
  //   JSON.stringify(videoSource)
  // );
  return videoSource;
});

animeRoutes.get("/caca", async () => {
  const homeList = await exeManager.sendCommand({
    command: "getHomePageListAnime",
  });
  return homeList;
});
