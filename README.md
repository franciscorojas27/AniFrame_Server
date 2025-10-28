````markdown
Servidor para AniFrame — un backend ligero escrito en TypeScript, diseñado para ejecutarse con Bun y Elysia.

Descripción

Este proyecto expone rutas relacionadas con anime (búsqueda, detalles, videos), historial y favoritos. Usa Elysia como framework HTTP, SQLite para persistencia local y un plugin externo (en `plugins/`) que se comunica por WebSocket usando `socket.io-client`.

Principales características

- API REST con Elysia
- Cron job interno para limpieza periódica de caché
- Integración con un scraper externo vía WebSocket (plugin en `plugins/`)
- Cache local y base de datos SQLite

Requisitos
# AniFrame_Server

Servidor para AniFrame — un backend ligero escrito en TypeScript, diseñado para ejecutarse con Bun y Elysia.

Descripción

Este proyecto expone rutas relacionadas con anime (búsqueda, detalles, videos), historial y favoritos. Usa Elysia como framework HTTP, SQLite para persistencia local y un plugin externo (en `plugins/`) que se comunica por WebSocket usando `socket.io-client`.

Principales características

- API REST con Elysia
- Cron job interno para limpieza periódica de caché
- Integración con un scraper externo vía WebSocket (plugin en `plugins/`)
- Cache local y base de datos SQLite

Requisitos

- Bun (recomendado) — https://bun.sh/
- Node.js (solo para herramientas que lo requieran; el runtime principal está pensado para Bun)
- Sistema operativo: desarrollado en Windows (se incluye un script/ejecutable en `plugins/` llamado `animeav1.exe` que el proyecto intenta ejecutar)

Instalación

1. Clonar el repositorio

```pwsh
git clone <repo-url>
cd AniFrame_Server
```

2. Instalar dependencias con Bun

```pwsh
bun install
```

Uso / Scripts disponibles

Los scripts definidos en `package.json` son:

- `dev`: Ejecuta Bun en modo watch para desarrollo
  - bun --watch src/main.ts
- `debug`: Ejecuta Bun con inspector y watch
  - bun --inspect=localhost:4000 --watch src/main.ts
- `build`: Construye el bundle de producción en `dist/`
  - bun build --outdir=dist src/main.ts --production --minify --target=bun
- `build:windows`: Empaqueta/compila para Windows (genera un binario llamado `AniFrame_Server`)
  - bun build --compile --outfile=AniFrame_Server src/main.ts
- `start`: Inicia el servidor desde `dist/main.js`
  - bun dist/main.js

Ejemplo de ejecución en desarrollo

```pwsh
bun run dev
```

Variables de entorno

Las variables de entorno esperadas (definidas en `src/shared/Env.d.ts` y `src/config/config.ts`) son:

- `PORT` - Puerto donde escucha la API (por defecto `3000`)
- `HOSTNAME` - Hostname para el servidor (por defecto `0.0.0.0`)
- `CACHE_TTL` - TTL de la cache (se espera como cadena; algunas partes del código pueden usarla)
- `SOCKET_IO_URL` - URL base para conectar al servidor WebSocket del scraper (por defecto `http://localhost:`)

Ejemplo para ejecutar en Windows PowerShell (ajustando puerto y URL del socket)

```pwsh
$env:PORT = "3000"
$env:HOSTNAME = "0.0.0.0"
$env:SOCKET_IO_URL = "http://localhost:"
bun run dev
```

Proyecto: estructura principal

- `src/`
  - `main.ts` — punto de entrada. Inicia la DB, manifiesto, y ejecuta el plugin de scraping.
  - `infrastructure/http/server.ts` — instancia de Elysia y registro de rutas/cron jobs.
  - `infrastructure/database/` — inicializa la base de datos y manifiesto.
  - `infrastructure/cache/` — repositorio de cache.
  - `core/` — entidades, repositorios y servicios del dominio.
  - `config/` — configuración y lectura de variables de entorno.
  - `shared/` — tipos globales y utilidades.
- `plugins/` — contiene el ejecutable externo `animeav1.exe` (plugin scraper)
- `storage/` — `covers/` y `videos/` (archivos persistidos)
- `tests/` y `test/` — pruebas unitarias y setup para Bun

Pruebas

Las pruebas usan Bun test runner configurado en `bunfig.toml` (se preloadea `tests/setup-global.ts`). Ejecuta:

```pwsh
bun test
```

Notas y consideraciones

- El proyecto usa Bun como runtime principal; su compatibilidad con Node.js no es total: algunas APIs (por ejemplo `Bun.spawn`) son específicas de Bun.
- `main.ts` intenta ejecutar un binario dentro de `plugins/` y leer un archivo de configuración desde el directorio temporal del sistema. Asegúrate de que `plugins/animeav1.exe` exista y tenga permisos para ejecutarse en tu entorno Windows.
- Si planeas ejecutar en Linux/Mac, revisa y adapta la llamada a `Bun.spawn` y la existencia del ejecutable.

Contribución

Si quieres contribuir:

1. Haz fork del repositorio
2. Crea una rama feature/bugfix
3. Abre un pull request con la descripción del cambio

Licencia

Este repositorio no incluye una licencia explícita; añade un `LICENSE` si deseas publicar con una licencia abierta.

Contacto

Francisco Rojas

