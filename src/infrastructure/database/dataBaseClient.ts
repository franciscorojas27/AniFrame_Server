import path from 'path'
const basepath = path.join(import.meta.dir, 'animeTV.db').toString()

export const SQLITE = new Bun.SQL({
  adapter: 'sqlite',
  filename: basepath,
  create: true,
  readwrite: true,
})
