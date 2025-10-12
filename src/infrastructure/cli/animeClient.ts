// infrastructure/cli/AnimeClient.ts
import { CLIProcess } from "./CLIProcess";
import type {
  AnimeResult,
  AnimeSchedule,
  Episode,
  M3U8,
} from "../../shared/types/agreement";
import type { anime } from "../../shared/types/anime";
import type { Filter } from "../../shared/types/filter";

export class AnimeClient {
  private static instance: AnimeClient;
  private cli = CLIProcess.getInstance();

  private constructor() {}

  public static getInstance(): AnimeClient {
    if (!AnimeClient.instance) AnimeClient.instance = new AnimeClient();
    return AnimeClient.instance;
  }

  async getHomePageListAnime(): Promise<anime[] | undefined> {
    return this.safeRun("getHomePageListAnime");
  }

  async getAnimeSchedule(): Promise<AnimeSchedule | undefined> {
    return this.safeRun("getAnimeSchedule", {}, {} as AnimeSchedule);
  }

  async getEpisodeList(url: string): Promise<Episode[] | undefined> {
    return this.safeRun("getEpisodeList", { "-u": url }, []);
  }

  async getCatalogListAnime(
    filter?: Filter,
    page: number = 1
  ): Promise<AnimeResult | undefined> {
    const args = this.buildArgs(filter, page);
    return this.safeRun("getCatalogListAnime", args);
  }

  async getSearchAnimeResults(
    query: string,
    filter?: Filter,
    page: number = 1
  ): Promise<AnimeResult | undefined> {
    const args = { "-q": query, ...this.buildArgs(filter, page) };
    return this.safeRun("getSearchAnimeResults", args);
  }

  async getAnimeStreamingLinks(
    urls: string[],
    batches?: number,
    delayMS?: number
  ): Promise<M3U8[] | undefined> {
    const args: (string | number)[] = [];
    for (const url of urls) {
      args.push("-u", url);
    }
    if (delayMS) args.push("-d", delayMS);
    if (batches) args.push("-b", batches);
    return this.safeRun("getAnimeStreamingLinks", args);
  } 

  async getAnimeDetails(url: string): Promise<Episode[] | undefined> {
    return this.safeRun("getAnimeDetails", { "-u": url }, []);
  }
  // Helpers
  private async safeRun<T>(
    method: string,
    args: Record<string, string | number> | (string | number)[] = {},
    fallback?: T
  ): Promise<T | undefined> {
    try {
      const argArray = Array.isArray(args) ? args : Object.entries(args).flat();
      const output = await this.cli.run(method, argArray);
      return JSON.parse(output) as T;
    } catch (error) {
      console.error(`[AnimeClient] Error in ${method}:`, error);
      return fallback;
    }
  }

  private buildArgs(
    filter?: Filter,
    page: number = 1
  ): Record<string, string | number> {
    const args: Record<string, string | number> = { "-p": page };
    if (filter?.category) args["-c"] = filter.category;
    if (filter?.status) args["-s"] = filter.status;
    if (filter?.genre) {
      for (const g of filter.genre) args[`-g`] = g;
    }
    return args;
  }
}
