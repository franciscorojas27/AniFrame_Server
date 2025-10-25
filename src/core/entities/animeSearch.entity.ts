import { t } from 'elysia'

export const AnimeSearchEntity = t.Object({
  id: t.Number(),
  name: t.String(),
  slug: t.String(),
  urlImg: t.Union([t.String(), t.Null()]),
})

export type animeSearch = typeof AnimeSearchEntity.static

export const animeSearchInvalid = t.Object({
  error: t.String(),
  numberPages: t.String(),
})
export type animeSearchInvalid = typeof animeSearchInvalid.static
