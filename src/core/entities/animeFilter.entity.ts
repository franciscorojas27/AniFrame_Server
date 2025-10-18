import { t } from "elysia";

export const animeFilter = t.Object({
    genres: t.Optional(t.Array(t.String())),
    category: t.Optional(t.String()),
    status: t.Optional(t.String()),
});

export type Filter = typeof animeFilter.static;
export const FilterInvalid = t.Object({ error: t.String() });
export type FilterInvalid = typeof FilterInvalid.static;