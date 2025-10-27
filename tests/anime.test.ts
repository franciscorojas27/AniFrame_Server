import { animeHome } from '@/core/entities/animeHome.entity.ts'
import { mainServer } from '../src/infrastructure/http/server.ts'
import { test, expect, mock, describe, it } from 'bun:test'

describe('Anime API', () => {
  it('returns an array of anime objects', async () => {
    mock.module('../src/core/services/animeHome.service.ts', () => ({
      AnimeHomeService: {
        getHomePageListAnime: mock(
          async (): Promise<animeHome[]> => [
            { id: 12, name: 'asd', cap: 12, slug: 'asd-ad-ad', imgUrl: 'asd' },
          ],
        ),
      },
    }))

    const req = new Request('http://localhost/anime/home')
    const res = await mainServer.handle(req)
    const data = await res.json()

    expect(Array.isArray(data)).toBeTrue()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })

  it('returns empty array if no data', async () => {
    mock.module('../src/core/services/animeHome.service.ts', () => ({
      AnimeHomeService: {
        getHomePageListAnime: mock(async (): Promise<animeHome[]> => []),
      },
    }))

    const req = new Request('http://localhost/anime/home')
    const res = await mainServer.handle(req)
    const data = await res.json()

    expect(Array.isArray(data)).toBeTrue()
    expect(data.length).toBe(0)
  })

  it('throws 404 if service fails to find data', async () => {
    mock.module('../src/core/services/animeHome.service.ts', () => ({
      AnimeHomeService: {
        getHomePageListAnime: mock(async () => {
          throw { status: 404, error: 'Anime home list not found' }
        }),
      },
    }))

    const req = new Request('http://localhost/anime/home')
    const res = await mainServer.handle(req)
    const data = await res.json()

    expect(res.status).toBe(404)
    expect(data.error).toBe('Anime home list not found')
  })

  it('throws 500 if service fails to fetch', async () => {
    mock.module('../src/core/services/animeHome.service.ts', () => ({
      AnimeHomeService: {
        getHomePageListAnime: mock(async () => {
          throw { status: 500, error: 'Failed to fetch anime list from source' }
        }),
      },
    }))

    const req = new Request('http://localhost/anime/home')
    const res = await mainServer.handle(req)
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.error).toBe('Failed to fetch anime list from source')
  })
})
