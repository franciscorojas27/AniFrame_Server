import type { TObject } from '@sinclair/typebox'

/**
 * @param row - The row of data to map.
 * @param keys - The keys to map to the schema.
 * @param schema - The schema to map to.
 * @returns The mapped row.
 * @description Maps a row of data to a schema. is important, you need to ensure that the keys and schema match. If the keys and schema do not match, the function will throw an error.
 */
export function mapRowFast<T extends TObject>(
  row: Record<string, any>,
  keys: string[],
  schema: T,
) {
  const mapped: Record<string, any> = {}
  const schemaKeys = Object.keys(schema.properties)

  for (let i = 0; i < schemaKeys.length; i++) {
    mapped[schemaKeys[i]] = row[keys[i]]
  }

  return mapped
}
