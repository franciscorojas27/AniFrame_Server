import { t } from 'elysia'
export const AnimeDetailsEpisodeEntity = t.Object({
  cap: t.Number(),
  watched: t.Boolean(),
  last_position_seconds: t.Number(),
})
export const AnimeDetailsEntity = t.Object({
  id: t.Number(),
  name: t.String(),
  urlImg: t.Union([t.String(), t.Null()]),
  description: t.Union([t.String(), t.Null()]),
  slug: t.String(),
  status: t.String(),
  date: t.Number(),
  genres: t.Array(t.String()),
  caps: t.Number(),
})

export type AnimeDetailsEpisode = typeof AnimeDetailsEpisodeEntity.static
export type AnimeDetails = typeof AnimeDetailsEntity.static

export const AnimeDetailsInvalidEntity = t.Object({
  error: t.String(),
})

export type AnimeDetailsInvalid = typeof AnimeDetailsInvalidEntity.static
