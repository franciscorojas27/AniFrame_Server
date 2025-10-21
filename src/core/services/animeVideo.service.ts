import { SQLITE } from "../../infrastructure/database/dataBaseClient.ts";
import { cacheRepository, sendMessage } from "../../main.ts";
import { animeVideoEntity } from "../entities/animeVideo.entity.ts";
import { status } from "elysia";

export abstract class AnimeVideoService {
    static async getVideoSource(id: string, cap: string): Promise<animeVideoEntity.animeVideo[]> {
        const manifest = await SQLITE`SELECT * FROM puglins_manifest`.values();
        if (manifest.length === 0) {
            throw status(500, { error: "Manifest not found" } satisfies animeVideoEntity.animeVideoInvalid);
        }
        console.log(id, cap);
        const cacheKey = `getAnimeStreamingLinks-${id}-${cap}`;
        const cached = await cacheRepository.get(cacheKey);
        if (cached) return JSON.parse(cached);
        if (cached) {
            try {
                return JSON.parse(cached) as animeVideoEntity.animeVideo[];
            } catch {
                await cacheRepository.delete(cacheKey);
            }
        }
        let videoSource;
        try {
            videoSource = await sendMessage('getAnimeStreamingLinks', { url: [`${manifest[0][2]}/media/${id}/${cap}`] });
        } catch (error) {
            throw status(500, { error: "Failed to fetch video source" });
        }

        if (!videoSource.success) {
            throw status(404, { error: "Video source not found" });
        }

        await cacheRepository.set(cacheKey, JSON.stringify(videoSource.content));
        return videoSource.content;
    }
}