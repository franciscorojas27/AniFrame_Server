import { describe, it, expect, beforeEach, mock } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"

let rows: any[] = []
const SQLITE = async (parts: TemplateStringsArray) => rows

const AnimeRepository = {
  insertOrUpdateHistory: async () => {},
}

mock.module(pathTo.db, () => ({ SQLITE }))
mock.module(pathTo.animeRepo, () => ({ AnimeRepository }))

describe("HistoryService.getHistoryVideo", () => {
  beforeEach(() => {
    rows = []
  })

  it("returns default when no history", async () => {
    const { HistoryService } = await import(pathTo.historyService)
    const out = await HistoryService.getHistoryVideo(1, 1)
    expect(out.watched).toBe(false)
    expect(out.last_position_seconds).toBe(0)
  })

  it("maps DB row when present", async () => {
    rows = [{ watched: 1, last_position_seconds: 23 }]
    const { HistoryService } = await import(pathTo.historyService)
    const out = await HistoryService.getHistoryVideo(1, 1)
    expect(out.watched).toBe(true)
    expect(out.last_position_seconds).toBe(23)
  })
})
