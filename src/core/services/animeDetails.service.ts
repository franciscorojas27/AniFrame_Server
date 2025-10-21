import { status } from "elysia";
import { cacheRepository, sendMessage } from "../../main.ts";
import { AnimeDetails } from "../entities/animeDetails.entity.ts";

export abstract class AnimeDetailsService {
    static async getAnimeDetails(slug: string): Promise<AnimeDetails> {
        const cacheKey = "getAnimeDetails-" + slug;
        const cached = await cacheRepository.get(cacheKey);
        if (cached) {
            try {
                return JSON.parse(cached) as AnimeDetails;
            } catch {
                await cacheRepository.delete(cacheKey);
            }
        }
        let animeClient;
        try {
            animeClient = await sendMessage('getAnimeDetails', { slug });
        } catch (err) {
            throw status(500, { error: "Failed to fetch anime list from source" });
        }
        if (!animeClient.success) {
            throw status(404, { error: "Anime catalog list not found" });
        }

        await cacheRepository.set(cacheKey, JSON.stringify(animeClient.content));
        return animeClient.content;
    }
}
