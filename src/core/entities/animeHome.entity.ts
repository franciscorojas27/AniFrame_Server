import { t } from 'elysia'

export const animeHomeEntity = t.Object({
    animeId: t.String(),
    name: t.String(),
    cap: t.String(),
    url: t.String(),
    urlImg: t.Union([t.String(), t.Null()]),
})

export type animeHome = typeof animeHomeEntity.static

export const animeHomeInvalid = t.Object({ error: t.String() })
export type animeHomeInvalid = typeof animeHomeInvalid.static