import { WeekDay, AnimeScheduleItem, animeCatalog } from "./anime.ts";

export type AnimeDetails = {
  idAnime: string | undefined;
  name: string;
  imgUrl: string | null;
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
