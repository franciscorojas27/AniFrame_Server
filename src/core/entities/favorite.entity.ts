import { t } from 'elysia'
export const favoriteEntity = t.Object({
  id: t.Number(),
  name: t.String(),
  slug: t.String(),
  imgUrl: t.String(),
})
export type favorite = typeof favoriteEntity.static

export const favoriteInvalid = t.Object({ error: t.String() })
export type favoriteInvalid = typeof favoriteInvalid.static
