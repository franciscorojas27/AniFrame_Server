const PORT = process.env.PORT ?? 3000
const HOSTNAME = process.env.HOSTNAME ?? '0.0.0.0'
const SOCKET_IO_URL = process.env.SOCKET_IO_URL ?? 'http://localhost:'
export { PORT, HOSTNAME, SOCKET_IO_URL }
