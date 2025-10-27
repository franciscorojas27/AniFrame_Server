import { describe, it, expect, mock, beforeEach } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

const mockCache = new Map<string, string>()
const cacheRepository = {
  get: mock(async (k: string) => mockCache.get(k) ?? null),
  set: mock(async (k: string, v: string) => void mockCache.set(k, v)),
  delete: mock(async (k: string) => void mockCache.delete(k)),
}
const sendMessage = mock(async (_cmd: string, _msg: object) => ({ success: true, content: [{ id: 1, name: "A", cap: 1, slug: "a", imgUrl: null }] }))

mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))

describe.skip("AnimeHomeService", () => {
  beforeEach(() => {
    mockCache.clear()
  })

  it("returns cached list when present", async () => {
    const key = "getHomePageListAnime"
    mockCache.set(key, JSON.stringify([{ id: 2, name: "B", cap: 2, slug: "b", imgUrl: null }]))
    const { AnimeHomeService } = await import(pathTo.animeHomeService)
    const res = await AnimeHomeService.getHomePageListAnime()
    expect(res[0].id).toBe(2)
    expect(sendMessage).not.toHaveBeenCalled()
  })

  it("fetches from sendMessage and caches on miss", async () => {
    const { AnimeHomeService } = await import(pathTo.animeHomeService)
    const res = await AnimeHomeService.getHomePageListAnime()
    expect(sendMessage).toHaveBeenCalled()
    expect(Array.isArray(res)).toBe(true)
    expect(cacheRepository.set).toHaveBeenCalled()
  })

})
