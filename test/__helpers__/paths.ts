// Resolve absolute file URLs to modules so mock.module() matches the service imports
export const pathTo = {
  main: new URL("../../src/main.ts", import.meta.url).href,
  db: new URL("../../src/infrastructure/database/dataBaseClient.ts", import.meta.url).href,
  animeRepo: new URL("../../src/core/repositories/anime.repository.ts", import.meta.url).href,
  activityHistoryRepo: new URL("../../src/core/repositories/activityHistory.repository.ts", import.meta.url).href,
  favoriteRepo: new URL("../../src/core/repositories/favorite.repository.ts", import.meta.url).href,
  animeHomeService: new URL("../../src/core/services/animeHome.service.ts", import.meta.url).href,
  animeDetailsService: new URL("../../src/core/services/animeDetails.service.ts", import.meta.url).href,
  animeVideoService: new URL("../../src/core/services/animeVideo.service.ts", import.meta.url).href,
  animeSearchService: new URL("../../src/core/services/animeSearch.service.ts", import.meta.url).href,
  animeScheduleService: new URL("../../src/core/services/animeSchedule.service.ts", import.meta.url).href,
  historyService: new URL("../../src/core/services/history.services.ts", import.meta.url).href,
  animeRoutes: new URL("../../src/infrastructure/http/routes/anime.route.ts", import.meta.url).href,
  historyRoutes: new URL("../../src/infrastructure/http/routes/history.route.ts", import.meta.url).href,
  favoriteRoutes: new URL("../../src/infrastructure/http/routes/favorite.route.ts", import.meta.url).href,
}
