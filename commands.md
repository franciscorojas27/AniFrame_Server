# 🧭 CLI — Comandos disponibles

## 🔍 `getSearchAnimeResults`
**Descripción:** Busca animes por nombre y filtros.

**Parámetros:**
- `-q, --query` `[string]` **(requerido)**: Texto a buscar
- `-g, --genres` `[array]`: Lista de géneros
- `-s, --status` `[string]`: Estado del anime
- `-c, --category` `[string]`: Categoría
- `-p, --page` `[string]` *(default: "1")*: Número de página (≥ 1)

**Ejemplo:**
```bash
node cli.js getSearchAnimeResults -q "Naruto" -g Action Adventure -s ongoing -c TV -p 2
```

---

## 📚 `getCatalogListAnime`
**Descripción:** Obtiene el catálogo de animes con filtros opcionales.

**Parámetros:**
- `-g, --genres` `[array]`: Lista de géneros
- `-s, --status` `[string]`: Estado del anime
- `-c, --category` `[string]`: Categoría
- `-p, --page` `[string]` *(default: "1")*: Número de página (≥ 1)

**Ejemplo:**
```bash
node cli.js getCatalogListAnime -g Comedy Romance -s finished -c Movie -p 1
```

---

## 🏠 `getHomePageListAnime`
**Descripción:** Muestra la lista principal de animes de la página de inicio.

**Parámetros:** *(ninguno)*

**Ejemplo:**
```bash
node cli.js getHomePageListAnime
```

---

## 📺 `getEpisodeList`
**Descripción:** Lista los episodios de un anime.

**Parámetros:**
- `-u, --url` `[string]` **(requerido)**: URL del anime

**Ejemplo:**
```bash
node cli.js getEpisodeList -u "https://animeflv.net/anime/naruto"
```

---

## 🧠 `getAnimeDetails`
**Descripción:** Muestra los detalles de un anime.

**Parámetros:**
- `-u, --url` `[string]` **(requerido)**: URL del anime

**Ejemplo:**
```bash
node cli.js getAnimeDetails -u "https://animeflv.net/anime/bleach"
```

---

## 📅 `getAnimeSchedule`
**Descripción:** Obtiene el horario de emisión de animes.

**Parámetros:** *(ninguno)*

**Ejemplo:**
```bash
node cli.js getAnimeSchedule
```

---

## 🎥 `getAnimeStreaming`
**Descripción:** Obtiene los enlaces de streaming (M3U8) de un episodio.

**Parámetros:**
- `-u, --url` `[string]` **(requerido)**: URL del episodio

**Ejemplo:**
```bash
node cli.js getAnimeStreaming -u "https://animeflv.net/ver/naruto-ep-1"
```

---

## ⚠️ Errores posibles

- `ErrorMessages.INVALID_ARGUMENTS` → Argumentos inválidos o faltantes
- `ErrorMessages.INVALID_COMMAND` → Comando inexistente