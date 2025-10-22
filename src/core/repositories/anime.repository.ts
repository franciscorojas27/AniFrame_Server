import { randomUUIDv7 } from 'bun'
import { SQLITE } from '../../infrastructure/database/dataBaseClient.ts'

export const AnimeRepository = {
  async findBySlug(slug: string) {
    const result =
      await SQLITE`SELECT * FROM animes WHERE slug = ${slug}`.values()
    return result.length ? result[0] : null
  },

  async findEpisodesWithHistory(animeId: number, userId: number = 1) {
    const rows = await SQLITE`
      SELECT e.cap, h.watched, h.last_position_seconds
      FROM episodes e
      LEFT JOIN history h
        ON h.cap_number = e.cap
       AND h.anime_id = e.anime_id
       AND h.user_id = ${userId}
      WHERE e.anime_id = ${animeId};
    `.values()

    return rows.map((ep: any[]) => ({
      cap: ep[0],
      watched: Boolean(ep[1]),
      last_position_seconds: ep[2] ?? 0,
    }))
  },

  async insertAnime(anime: any, slug: string) {
    await SQLITE`
      INSERT INTO animes (id, name, description, url_img, status, slug, date, genres, caps)
      VALUES (${anime.id}, ${anime.name}, ${anime.description}, ${anime.urlImg},
              ${anime.status}, ${slug}, ${anime.date}, ${JSON.stringify(anime.genres)}, ${anime.caps})
    `
  },

  async insertInitialEpisodesAndHistory(
    animeId: number,
    caps: number,
    userId: number = 1,
  ) {
    await SQLITE.begin(async (tx) => {
      for (let i = 1; i <= caps; i++) {
        const episodeId = randomUUIDv7()
        await tx`
          INSERT INTO episodes (id, cap, anime_id)
          VALUES (${episodeId}, ${i}, ${animeId})
          ON CONFLICT(anime_id, cap) DO NOTHING
        `
        await tx`
          INSERT INTO history (id, user_id, anime_id, cap_number)
          VALUES (${randomUUIDv7()}, ${userId}, ${animeId}, ${i})
          ON CONFLICT(user_id, anime_id, cap_number) DO NOTHING
        `
      }
    })
  },

  async insertOrUpdateHistory(
    animeId: number,
    cap: number,
    userId: number = 1,
    lastPosition: number,
    watched: boolean,
  ) {
    await SQLITE`
      INSERT INTO history (id, user_id, anime_id, cap_number, last_position_seconds, watched)
      VALUES (${randomUUIDv7()}, ${userId}, ${animeId}, ${cap}, ${lastPosition}, ${watched})
      ON CONFLICT(user_id, anime_id, cap_number)
      DO UPDATE SET last_position_seconds = ${lastPosition}, watched = ${watched}, updated_at = CURRENT_TIMESTAMP
    `
  },
}
