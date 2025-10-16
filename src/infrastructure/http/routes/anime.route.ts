import Elysia, { t } from "elysia";
import { CacheRepository } from "../../cache/cache.repository";
import { SQLITE } from "../../database/dataBaseClient";
import { sendMessage } from "../../../main";
import { AnimeHomeService } from "../../../core/services/animeHome.service";
import { animeHomeEntity, animeHomeInvalid } from "../../../core/entities/animeHome.entity";

const cacheRepository = CacheRepository.create();

export const animeRoutes = new Elysia({ prefix: "/anime" });

animeRoutes.get("/home", async ({ set, status }) => {
  const animeClient = await AnimeHomeService.getHomePageListAnime()
  set.headers['Content-Type'] = 'application/json; charset=utf-8';
  return animeClient;
}, {
  response: {
    200: t.Array(animeHomeEntity),
    400: animeHomeInvalid,
    500: animeHomeInvalid
  }
});

animeRoutes.get("/video/:id/:cap", async ({ set, status, params: { id, cap } }) => {
  try {
    const manifest = await SQLITE`SELECT * FROM puglins_manifest`.values();
    if (manifest.length === 0) {
      return status(500, { error: "Manifest not found" });
    }

    const cacheKey = `getAnimeStreamingLinks-${id}-${cap}`;
    const cached = await cacheRepository.get(cacheKey);
    if (cached) return JSON.parse(cached);

    const videoSource = await sendMessage("getAnimeStreamingLinks", {
      url: [`${manifest[0][2]}/media/${id}/${cap}`],
    });

    if (!videoSource) {
      return status(404, { error: "Video source not found" });
    }

    await cacheRepository.set(cacheKey, JSON.stringify(videoSource));
    set.headers['Content-Type'] = 'application/json; charset=utf-8';
    return videoSource;
  } catch (error) {
    console.error("Error fetching video source:", error);
    return status(500, { error: "Internal Server Error" });
  }
});
