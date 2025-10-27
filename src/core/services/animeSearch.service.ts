import { status } from "elysia";
import { cacheRepository, sendMessage } from "../../main.ts";
import { animeSearch } from "../entities/animeSearch.entity.ts";
import { Filter } from "../entities/animeFilter.entity.ts";
export abstract class AnimeSearchService {
    static async getSearchAnimeResults(query: string, page?: number, filter?: Filter
    ): Promise<{ results: animeSearch[]; numberPages: number }> {
        const cacheKey = "getSearchAnime-" + query + (page ? "-" + page : "") + (filter ? "-" + JSON.stringify(filter) : "");
        const cached = await cacheRepository.get(cacheKey);
        if (cached) {
            try {
                return JSON.parse(cached) as { results: animeSearch[]; numberPages: number };
            } catch {
                await cacheRepository.delete(cacheKey);
            }
        }
        let animeClient;
        try {
            animeClient = await sendMessage('getSearchAnime', {
                args: {
                    query,
                    page,
                    category: filter?.category,
                    genres: filter?.genres,
                    status: filter?.status,
                }
            });
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
