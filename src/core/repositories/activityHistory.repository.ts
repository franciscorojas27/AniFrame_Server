import { SQLITE } from '../../infrastructure/database/dataBaseClient'
import {
  history,
  historyEntity,
  historyInvalid,
} from '../../core/entities/history.entity.ts'

export const ActivityHistoryRepository = {
  async getHistory(): Promise<history[]> {
    return await SQLITE`SELECT anime_id,name,slug,img_url,last_episode FROM activity_history ORDER BY updated_at DESC`
  },
  async insertOrUpdateHistory(
    id: number,
    cap: number,
    name: string,
    slug: string,
    img: string,
  ): Promise<void> {
    await SQLITE`INSERT INTO activity_history (id,user_id,anime_id,name,slug,img_url,last_episode,updated_at) values(${Bun.randomUUIDv7()},1,${id},${name},${slug},${img},${cap},datetime('now')) ON CONFLICT(user_id, anime_id) DO UPDATE SET last_episode = ${cap}, img_url = ${img}, updated_at = datetime('now')`
  },
}
