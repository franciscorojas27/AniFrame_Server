import { describe, it, expect, mock, beforeEach } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

let rows: any[] = []
const SQLITE = async (parts: TemplateStringsArray) => {
  if (String(parts).includes("plugins_manifest")) {
    return rows
  }
  return []
}

const cache = new Map<string, string>()
const cacheRepository = {
  get: async (k: string) => cache.get(k) ?? null,
  set: async (k: string, v: string) => void cache.set(k, v),
  delete: async (k: string) => void cache.delete(k),
}

let sendMessage = async (_cmd: string, _msg: object) => ({ success: true, content: [{ foundUrl: "u", cap: "1" }] })

mock.module(pathTo.db, () => ({ SQLITE }))
mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))

describe("AnimeVideoService", () => {
  beforeEach(() => {
    rows = [{ name: "p", version: "1", urlPage: "http://x", date_created: "", filterSupportedList: "", createdAt: "" }]
    cache.clear()
    sendMessage = async (_c, _m) => ({ success: true, content: [{ foundUrl: "u", cap: "1" }] })
    mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))
  })

  it("throws 500 when manifest missing", async () => {
    rows = []
    const { AnimeVideoService } = await import(pathTo.animeVideoService)
  await expect(AnimeVideoService.getVideoSource("a", 1)).rejects.toBeTruthy()
  })

  it("returns from cache if present", async () => {
    const key = "getAnimeStreamingLinks-a-1"
    cache.set(key, JSON.stringify({ foundUrl: "cached", cap: "1" }))
    const { AnimeVideoService } = await import(pathTo.animeVideoService)
    const res = await AnimeVideoService.getVideoSource("a", 1)
    expect(res.foundUrl).toBe("cached")
  })

  it("fetches and caches when miss", async () => {
    const { AnimeVideoService } = await import(pathTo.animeVideoService)
    const res = await AnimeVideoService.getVideoSource("a", 1)
    expect(res.foundUrl).toBe("u")
    const key = "getAnimeStreamingLinks-a-1"
    expect(cache.has(key)).toBe(true)
  })
})
