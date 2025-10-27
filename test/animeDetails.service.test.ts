import { describe, it, expect, mock, beforeEach } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

let repo = {
  findBySlug: async (_: string) => null as any,
  findEpisodesWithHistory: async (_: number) => [{ cap: 1, watched: false, last_position_seconds: 0 }],
  isFavorited: async (_: number) => false,
  getLastEpisode: async (_: number) => 1,
  insertAnime: async () => {},
  insertInitialEpisodesAndHistory: async () => {},
  update: async () => {},
}

let sendMessage = async (_cmd: string, _msg: object) => ({ success: true, content: { id: 10, name: "X", description: null, imgUrl: null, status: "ongoing", slug: "x", date: 0, genres: ["a"], caps: 12, favorited: false, lastEpisode: null } })

mock.module(pathTo.animeRepo, () => ({ AnimeRepository: repo }))
mock.module(pathTo.main, () => ({ sendMessage }))

describe("AnimeDetailsService", () => {
  beforeEach(() => {
    repo = { ...repo, findBySlug: async () => null as any }
    sendMessage = async (_c, _m) => ({ success: true, content: { id: 10, name: "X", description: null, imgUrl: null, status: "ongoing", slug: "x", date: 0, genres: ["a"], caps: 12, favorited: false, lastEpisode: null } })
    mock.module(pathTo.animeRepo, () => ({ AnimeRepository: repo }))
    mock.module(pathTo.main, () => ({ sendMessage }))
  })

  it("returns details from DB if exists", async () => {
  repo = { ...repo, findBySlug: async () => ({ id: 1, name: "DB", description: null, img_url: null, status: "ongoing", slug: "db", date: 0, genres: JSON.stringify(["a"]), caps: 5 }) as any }
  mock.module(pathTo.animeRepo, () => ({ AnimeRepository: repo }))
    const { AnimeDetailsService } = await import(pathTo.animeDetailsService)
  const res = await AnimeDetailsService.getAnimeDetails("db")
  expect(res.details.id).toBe(1)
  })

  it("fetches remote, inserts, and returns details when not in DB", async () => {
    const { AnimeDetailsService } = await import(pathTo.animeDetailsService)
  const res = await AnimeDetailsService.getAnimeDetails("x")
    expect(res.details.id).toBe(10)
  })

  it("updateAnime throws 404 if not in DB", async () => {
    const { AnimeDetailsService } = await import(pathTo.animeDetailsService)
  await expect(AnimeDetailsService.updateAnime("nope")).rejects.toBeTruthy()
  })
})
