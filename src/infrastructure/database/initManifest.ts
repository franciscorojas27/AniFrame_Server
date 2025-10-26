import { sendMessage } from '../../main'
import { SQLITE } from './dataBaseClient'

export async function initManifest() {
  const manifestDB = await SQLITE`SELECT * FROM plugins_manifest`

  if (manifestDB.length === 0) {
    const manifest = await sendMessage('getManifest', {})

    if (manifest.success) {
      await SQLITE`
            INSERT INTO plugins_manifest (
              name,
              version,
              urlPage,
              date_created,
              filterSupportedList
            ) VALUES (
              ${manifest.content.name},
              ${manifest.content.version},
              ${manifest.content.urlPage},
              ${manifest.content.date_created},
              ${JSON.stringify(manifest.content.filterSupportedList)}
            )
          `
    }
  }
}
