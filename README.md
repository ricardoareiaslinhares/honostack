# ⚡ Deno + Hono + JSX + Tailwind App (with Docker)

A fast, minimal, and modern starter template using **Deno**, **Hono**, **JSX (server & client)**, and **TailwindCSS**, bundled with **Docker** for both development and production.

---

## Development

Use `docker-compose` for local development:

```bash
docker compose up
```
This sets up everything with:
- watchexec for live-reloading your client code
- tailwindcss to rebuild styles on the fly
- File watching for JSX and CSS

If you don’t use Docker, you’ll need to manually install:
- tailwindcss
- watchexec

> All client-side code must live inside the /client folder.

## Production
Use the default Dockerfile, it already builds the css and the client side js bundle.