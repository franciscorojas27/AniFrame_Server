import { CacheRepository } from "../../infrastructure/cache/cache.repository";
import { sendMessage } from "../../main";
import { animeHome } from "../entities/animeHome.entity";
import { status } from "elysia";
const cacheRepository = CacheRepository.create();

export abstract class AnimeHomeService {
    static async getHomePageListAnime(): Promise<animeHome[]> {
        const cacheKey = "getHomevPageListAnime";
        const cached = await cacheRepository.get(cacheKey);
        if (cached) return JSON.parse(cached) as animeHome[];
        const animeClient = await sendMessage(cacheKey, {});
        if (!animeClient.success) {
            throw status(404, { error: "Anime home list not found" });
        }
        await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
        return animeClient.content;
    }
}