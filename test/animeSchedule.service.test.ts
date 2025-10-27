import { describe, it, expect, beforeEach, mock } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

const cache = new Map<string, string>()
const cacheRepository = {
  get: async (k: string) => cache.get(k) ?? null,
  set: async (k: string, v: string) => void cache.set(k, v),
  delete: async (k: string) => void cache.delete(k),
}

let sendMessage = async (_cmd: string, _msg: object) => ({ success: true, content: { monday: [] } })

mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))

describe("AnimeScheduleService", () => {
  beforeEach(() => {
    cache.clear()
    sendMessage = async (_c, _m) => ({ success: true, content: { monday: [] } })
    mock.module(pathTo.main, () => ({ cacheRepository, sendMessage }))
  })

  it("returns and caches schedule", async () => {
    const { AnimeScheduleService } = await import(pathTo.animeScheduleService)
    const out = await AnimeScheduleService.getSchedule()
    expect(out).toHaveProperty("monday")
    expect(cache.has("getAnimeSchedule")).toBe(true)
  })
})
