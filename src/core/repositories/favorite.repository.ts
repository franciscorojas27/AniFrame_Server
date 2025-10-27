import { randomUUIDv7 } from 'bun'
import { SQLITE } from '@/infrastructure/database/dataBaseClient'
import { mapRowFast } from '../../shared/libs/mapRow'
import { favorite, favoriteEntity } from '../entities/favorite.entity'

const db = ['anime_id', 'name', 'slug', 'img_url']

export const FavoriteRepository = {
  async get(): Promise<favorite[]> {
    const rows = await SQLITE`
      SELECT anime_id, name, slug, img_url
      FROM favorites
      ORDER BY updated_at DESC
    `
    return rows.map((row: favorite) => mapRowFast(row, db, favoriteEntity))
  },
  async create(body: favorite) {
    const { id, name, slug, imgUrl } = body
    await SQLITE`INSERT INTO favorites (id,user_id,anime_id, name, slug, img_url) VALUES (${randomUUIDv7()},"1", ${id}, ${name}, ${slug}, ${imgUrl}) `
  },
  async delete(id: Number) {
    return await SQLITE`DELETE FROM favorites WHERE anime_id = ${id}`
  },
}
