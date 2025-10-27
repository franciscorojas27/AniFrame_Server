import { describe, it, expect, mock } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"
import Elysia from "elysia"

mock.module(pathTo.animeVideoService, () => ({
  AnimeVideoService: {
    getEpisodes: async (_slug: string) => [{ cap: 1, watched: false, last_position_seconds: 0 }],
    getVideoSource: async () => ({ foundUrl: "u", cap: "1" }),
  },
}))

mock.module(pathTo.historyService, () => ({
  HistoryService: { getHistoryVideo: async () => ({ watched: false, last_position_seconds: 0 }) },
}))

mock.module(pathTo.animeRepo, () => ({
  AnimeRepository: { isFavorited: async () => false },
}))

mock.module(pathTo.animeHomeService, () => ({
  AnimeHomeService: { getHomePageListAnime: async () => [{ id: 1, name: "A", cap: 1, slug: "a", imgUrl: null }] },
}))

mock.module(pathTo.animeSearchService, () => ({
  AnimeSearchService: { getSearchAnimeResults: async () => ({ results: [], numberPages: 0 }) },
}))

mock.module(pathTo.animeDetailsService, () => ({
  AnimeDetailsService: {
    getAnimeDetails: async () => ({ details: { id: 1, name: "A", imgUrl: null, description: null, slug: "a", status: "ongoing", date: 0, genres: [], caps: 1, favorited: false, lastEpisode: null }, episodes: [] }),
    updateAnime: async () => ({ details: { id: 1, name: "A", imgUrl: null, description: null, slug: "a", status: "ongoing", date: 0, genres: [], caps: 1, favorited: false, lastEpisode: null }, episodes: [] }),
  },
}))

describe("anime routes", () => {
  it("wires up and serves basic endpoints", async () => {
    const { animeRoutes } = await import(pathTo.animeRoutes)
    const app = new Elysia().use(animeRoutes)

    const resHome = await app.handle(new Request("http://localhost/anime/home"))
    expect(resHome.status).toBe(200)

    const resSearch = await app.handle(new Request("http://localhost/anime/search?querySearch=a"))
    expect(resSearch.status).toBe(200)

    const resDetails = await app.handle(new Request("http://localhost/anime/details/a"))
    expect(resDetails.status).toBe(200)

    const resVideo = await app.handle(new Request("http://localhost/anime/video/a/1/1"))
    expect(resVideo.status).toBe(200)

    const resEpisodes = await app.handle(new Request("http://localhost/anime/episodes/a"))
    expect(resEpisodes.status).toBe(200)
  })
})
