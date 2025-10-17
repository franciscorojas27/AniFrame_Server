import { t } from "elysia";

export namespace animeVideoEntity {
    export const animeVideo = t.Object({
        foundUrl: t.Union([t.String(), t.Null()]),
        cap: t.String(),
    })
    export type animeVideo = typeof animeVideo.static
    export const animeVideoInvalid = t.Object({ error: t.String() })
    export type animeVideoInvalid = typeof animeVideoInvalid.static
}