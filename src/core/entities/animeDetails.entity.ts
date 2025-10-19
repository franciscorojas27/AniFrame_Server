import { t } from "elysia";

export const AnimeDetailsEntity = t.Object({
    idAnime: t.Optional(t.String()),
    name: t.String(),
    urlImg: t.Union([t.String(), t.Null()]),
    description: t.Union([t.String(), t.Null()]),
    status: t.String(),
    date: t.String(),
    genres: t.Array(t.String()),
    caps: t.Number(),
});

export type AnimeDetails = typeof AnimeDetailsEntity.static;

export const AnimeDetailsInvalidEntity = t.Object({
    error: t.String(),
});

export type AnimeDetailsInvalid = typeof AnimeDetailsInvalidEntity.static;