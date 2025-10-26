declare namespace Bun {
  interface Env {
    PORT: string
    HOSTNAME: string
    CACHE_TTL: string
    SOCKET_IO_URL: string
  }
}
