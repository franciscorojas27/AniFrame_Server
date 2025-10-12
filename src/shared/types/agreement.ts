import { WeekDay, AnimeScheduleItem, animeCatalog } from "./anime.js";

export type M3U8 = {
  foundUrl?: string;
  cap: string;
};

export type AnimeDetails = {
  idAnime: string | undefined;
  name: string;
  urlImg: string | null;
  description: string | null;
  status: string;
  date: string;
  genres: string[];
  caps: number;
};

export type Episode = {
  capLink: string | null;
  capThumbnail: string | null;
};

export type AnimeSchedule = Record<WeekDay, AnimeScheduleItem[]>;

export type AnimeResult = {
  results: animeCatalog[];
  numberPages: string;
};

export type manifestAgreement = {
  name: string;
  version: string;
  urlPage: string;
  date_created: string;
  filterSupportedList: {
    status: string[];
    genres: string[];
    type: string[];
  };
};
