import { ExeManager } from "./infrastructure/cli/CLIProcess_alive";

export const exeManager = new ExeManager();

import { ManifestClient } from "./infrastructure/cli/ManifestClient";
import { SQLITE } from "./infrastructure/database/dataBaseClient";
import { mainServer } from "./infrastructure/http/server";
import { manifestAgreement } from "./shared/types/agreement";

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

mainServer;
