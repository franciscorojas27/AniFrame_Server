import { t } from 'elysia'
export const historyEntity = t.Object({
  name: t.String(),
  slug: t.String(),
  img_url: t.String(),
  last_episode: t.Number(),
})
export type history = typeof historyEntity.static

export const historyInvalid = t.Object({ error: t.String() })
export type historyInvalid = typeof historyInvalid.static
