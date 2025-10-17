import Elysia, { t } from "elysia";
import { CacheRepository } from "../../cache/cache.repository";
import { SQLITE } from "../../database/dataBaseClient";
import { sendMessage } from "../../../main";
import { AnimeHomeService } from "../../../core/services/animeHome.service";
import { animeHomeEntity, animeHomeInvalid } from "../../../core/entities/animeHome.entity";
import { animeVideoEntity } from "../../../core/entities/animeVideo.entity";
import { AnimeVideoService } from "../../../core/services/animeVideo.service";


export const animeRoutes = new Elysia({ prefix: "/anime" });

animeRoutes.get("/home", async () => {
  const animeClient = await AnimeHomeService.getHomePageListAnime()
  return animeClient;
}, {
  response: {
    200: t.Array(animeHomeEntity),
    400: animeHomeInvalid,
    500: animeHomeInvalid
  }
});

animeRoutes.get("/video/:id/:cap", async ({ params: { id, cap } }) => {
  const animeVideo = await AnimeVideoService.getVideoSource(id, cap)
  return animeVideo;
}, {
  params: t.Object({
    id: t.String(),
    cap: t.String()
  }),
  response: {
    200: t.Array(animeVideoEntity.animeVideo),
    400: animeVideoEntity.animeVideoInvalid,
    500: animeVideoEntity.animeVideoInvalid
  }
});
