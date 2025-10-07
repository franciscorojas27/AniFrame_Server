import { Elysia, status } from "elysia";
import { PORT, HOSTNAME } from "./config/config";
import staticPlugin from "@elysiajs/static";
import path from "path";
import { file, spawn } from "bun";
import { existsSync } from "fs";

type anime = {
  name: string;
  cap: string;
  urlReady: string;
  urlImg: string;
};

// const info = spawn([
//   "node",
//   "C:\\Users\\franc\\Desktop\\iptv-bun\\scrapper\\src\\index.js",
//   "bueans",
// ]);

// const { value } = await info.stdout.getReader().read();
// const animeList = JSON.parse(new TextDecoder().decode(value)) as anime[];

const app = new Elysia();

app.onRequest(({ request }) => {
  const { method, url } = request;
  console.log(`${method} ${url}`);
});

app.use(staticPlugin({ prefix: "/hls", assets: "hls" }));
app.use(staticPlugin({ prefix: "/covers", assets: "covers" }));

app.onAfterHandle(({ set }) => {
  set.headers["Access-Control-Allow-Origin"] = "*";
  set.headers["Access-Control-Allow-Methods"] = "GET, HEAD, OPTIONS";
  set.headers["Access-Control-Allow-Headers"] =
    "Origin, Accept, Content-Type, Range, Referer, User-Agent";
  set.headers["Access-Control-Expose-Headers"] = "Content-Range, Accept-Ranges";
});

app.get("/animelist", () => {
  return animeList;
});

app.get("/playlist", () => {
  const playlistPath = path.join(import.meta.dir, "playlist", "playlist.m3u");
  if (!existsSync(playlistPath)) {
    return status(404);
  }
  return file(playlistPath);
});

app.listen({ port: PORT, hostname: HOSTNAME });
console.log(`👾 Server IPTV working at ${HOSTNAME}:${PORT}`);
