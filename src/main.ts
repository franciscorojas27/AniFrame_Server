import { ManifestClient } from "./infrastructure/cli/ManifestClient";
import { SQLITE } from "./infrastructure/database/dataBaseClient";
import { mainServer } from "./infrastructure/http/server";
import { manifestAgreement } from "./shared/types/agreement";
import os from "os";
import { io } from "socket.io-client";
import path from "path";
import fs from "fs";
import { CacheRepository } from "./infrastructure/cache/cache.repository";
Bun.spawn([path.join(process.cwd(), "plugins", "animeav1.exe")]);

await SQLITE`
  CREATE TABLE IF NOT EXISTS cache (
    id TEXT PRIMARY KEY NOT NULL,
    value TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  )
`;
await SQLITE`
  CREATE TABLE IF NOT EXISTS puglins_manifest (
    name TEXT PRIMARY KEY NOT NULL,
    version TEXT NOT NULL,
    urlPage TEXT NOT NULL,
    date_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    filterSupportedList TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  )
`;

const manifestDB = await SQLITE`SELECT * FROM puglins_manifest`;

if (manifestDB.length === 0) {
  const manifest = await ManifestClient.getInstance().getManifest();

  if (manifest) {
    const manifestParsed: manifestAgreement = JSON.parse(manifest);

    await SQLITE`
      INSERT INTO puglins_manifest (
        name,
        version,
        urlPage,
        date_created,
        filterSupportedList
      ) VALUES (
        ${manifestParsed.name},
        ${manifestParsed.version},
        ${manifestParsed.urlPage},
        ${manifestParsed.date_created},
        ${JSON.stringify(manifestParsed.filterSupportedList)}
      )
    `;
  }
}

const pathPluginPort = path.join(os.tmpdir(), "animeav1", "config.json");
const config = JSON.parse(fs.readFileSync(pathPluginPort, "utf-8"));

let port = config.port;
let socket = io("http://localhost:" + port);
socket.on("connect", () => {
  console.log("✅ Connected to scraper server webSocket");
});

export const sendMessage = async (
  command: string,
  message: object
): Promise<{ success: boolean, content: any }> => {
  return new Promise((resolve, reject) => {
    socket.emit(command, message, (response: any) => {
      resolve(response);
    });
  });
};

socket.on("disconnect", () => {
  console.log("❌ Disconnected from scraper server webSocket");
});
export const cacheRepository = CacheRepository.create();
mainServer;
