import { describe, it, expect, mock } from "bun:test"
import { pathTo } from "./__helpers__/paths.ts"
import Elysia from "elysia"

mock.module(pathTo.activityHistoryRepo, () => ({
  ActivityHistoryRepository: {
    getHistory: async () => [
      { anime_id: 1, name: "A", slug: "a", img_url: "x.jpg", last_episode: 1 },
    ],
    insertOrUpdateHistory: async () => {},
  },
}))

mock.module(pathTo.animeRepo, () => ({
  AnimeRepository: {
    insertOrUpdateHistory: async () => {},
    delete: async () => {},
  },
}))

mock.module(pathTo.favoriteRepo, () => ({
  FavoriteRepository: {
    get: async () => [{ id: 1, name: "A", slug: "a", imgUrl: "x.jpg" }],
    create: async () => {},
    delete: async () => {},
  },
}))

describe("history and favorite routes", () => {
  it("history: GET /history returns 200", async () => {
    const { historyRoutes } = await import(pathTo.historyRoutes)
    const app = new Elysia().use(historyRoutes)
    const res = await app.handle(new Request("http://localhost/history/"))
    expect(res.status).toBe(200)
  })

  it("favorite: CRUD basic flow", async () => {
    const { favoriteRoutes } = await import(pathTo.favoriteRoutes)
    const app = new Elysia().use(favoriteRoutes)
    const list = await app.handle(new Request("http://localhost/favorite/"))
    expect(list.status).toBe(200)

    const created = await app.handle(new Request("http://localhost/favorite/", { 
      method: "POST", 
      body: JSON.stringify({ id: 1, name: "A", slug: "a", imgUrl: "x.jpg" }), 
      headers: { "content-type": "application/json" } 
    }))
    expect(created.status).toBe(201)

    const deleted = await app.handle(new Request("http://localhost/favorite/1", { method: "DELETE" }))
    expect(deleted.status).toBe(204)
  })
})
