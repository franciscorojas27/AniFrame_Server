import { } from "../../infrastructure/cache/cache.repository.ts";
import { animeHome } from "../entities/animeHome.entity.ts";
import { status } from "elysia";
import { cacheRepository, sendMessage } from "../../main.ts";

export abstract class AnimeHomeService {
    static async getHomePageListAnime(): Promise<animeHome[]> {
        const cacheKey = "getHomePageListAnime";
        const cached = await cacheRepository.get(cacheKey);
        if (cached) {
            try {
                return JSON.parse(cached) as animeHome[];
            } catch {
                await cacheRepository.delete(cacheKey);
            }
        }

        let animeClient;
        try {
            animeClient = await sendMessage(cacheKey, {});
        } catch (err) {
            throw status(500, { error: "Failed to fetch anime list from source" });
        }
        if (!animeClient.success) {
            throw status(404, { error: "Anime home list not found" });
        }

        await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
        return animeClient.content;
    }
}