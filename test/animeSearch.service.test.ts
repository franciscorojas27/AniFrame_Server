import { describe, it, expect, beforeEach, mock } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

const cache = new Map<string, string>()
const cacheRepository = {
  get: async (k: string) => cache.get(k) ?? null,
  set: async (k: string, v: string) => void cache.set(k, v),
  delete: async (k: string) => void cache.delete(k),
}

let sendMessage = async (_cmd: string, _msg: object) => ({ success: true, content: { results: [{ id: 1, name: "A", slug: "a", imgUrl: null }], numberPages: 1 } })

mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))

describe("AnimeSearchService", () => {
  beforeEach(() => {
    cache.clear()
    sendMessage = async (_c, _m) => ({ success: true, content: { results: [{ id: 1, name: "A", slug: "a", imgUrl: null }], numberPages: 1 } })
    mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))
  })

  it("caches search results", async () => {
    const { AnimeSearchService } = await import(pathTo.animeSearchService)
    const out = await AnimeSearchService.getSearchAnimeResults("a")
    expect(out.numberPages).toBe(1)
    const key = "getSearchAnime-a"
    expect(cache.has(key)).toBe(true)
  })
})
