# Changelog

## Unreleased

- Generate Better Auth Drizzle tables to `src/db/schema/auth.ts`, skip OAuth providers when client credentials are unset, and set `package.json` `"type": "module"` so `auth generate` does not warn. Drop generated drizzle v0 `relations()` helpers (incompatible with drizzle-orm 1.0).
- Fix `drizzle.config.ts` to load Postgres credentials from `process.env` instead of Hono `env()` / `getRuntimeKey()`, which require a request `Context` that drizzle-kit does not have.
