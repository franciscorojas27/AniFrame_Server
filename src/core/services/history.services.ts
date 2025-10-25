import { SQLITE } from '../../infrastructure/database/dataBaseClient'
import { AnimeRepository } from '../repositories/anime.repository'

export abstract class HistoryService {
  static async getHistory(id: number, cap: number) {
    const [history] = await SQLITE`SELECT watched,last_position_seconds
    from history WHERE anime_id = ${id} AND cap_number = ${cap}`

    if (!history) {
      await AnimeRepository.insertOrUpdateHistory(id, cap, 1, 0, false)
      return {
        watched: false,
        last_position_seconds: 0,
      }
    }
    return {
      watched: Boolean(history.watched),
      last_position_seconds: history.last_position_seconds,
    }
  }
}
